using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Persistence.Models;

namespace Persistence
{
    public partial class OutdoorsContext : IdentityDbContext<AppUser>
    {
        public OutdoorsContext()
        {
        }

        public OutdoorsContext(DbContextOptions<OutdoorsContext> options)
            : base(options)
        {
        }
        public virtual DbSet<OutdoorProduct> OutdoorProducts { get; set; }
        public virtual DbSet<Persistence.Models.Popularity> Popularities { get; set; }
        public virtual DbSet<Persistence.Models.Rating> Ratings { get; set; }
        public virtual DbSet<Persistence.Models.Trail> Trails { get; set; }
        public virtual DbSet<TrailLengthType> TrailLengthTypes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder().SetBasePath(System.IO.Directory.GetCurrentDirectory())
                                                                             .AddJsonFile("appsettings.json")
                                                                             .Build();
                var connectionString = configuration.GetConnectionString("OutdoorsConnection");
                optionsBuilder.UseNpgsql(connectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.HasAnnotation("Relational:Collation", "Polish_Poland.1250");

            modelBuilder.Entity<AspNetRole>(entity =>
            {
                entity.HasIndex(e => e.NormalizedName, "RoleNameIndex")
                    .IsUnique();

                entity.Property(e => e.Name).HasMaxLength(256);

                entity.Property(e => e.NormalizedName).HasMaxLength(256);
            });

            modelBuilder.Entity<AspNetRoleClaim>(entity =>
            {
                entity.HasIndex(e => e.RoleId, "IX_AspNetRoleClaims_RoleId");

                entity.Property(e => e.RoleId).IsRequired();

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetRoleClaims)
                    .HasForeignKey(d => d.RoleId);
            });

            modelBuilder.Entity<AspNetUser>(entity =>
            {
                entity.HasIndex(e => e.NormalizedEmail, "EmailIndex");

                entity.HasIndex(e => e.NormalizedUserName, "UserNameIndex")
                    .IsUnique();

                entity.Property(e => e.Email).HasMaxLength(256);

                entity.Property(e => e.LockoutEnd).HasColumnType("timestamp with time zone");

                entity.Property(e => e.NormalizedEmail).HasMaxLength(256);

                entity.Property(e => e.NormalizedUserName).HasMaxLength(256);

                entity.Property(e => e.UserName).HasMaxLength(256);
            });

            modelBuilder.Entity<AspNetUserClaim>(entity =>
            {
                entity.HasIndex(e => e.UserId, "IX_AspNetUserClaims_UserId");

                entity.Property(e => e.UserId).IsRequired();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserClaims)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserLogin>(entity =>
            {
                entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });

                entity.HasIndex(e => e.UserId, "IX_AspNetUserLogins_UserId");

                entity.Property(e => e.UserId).IsRequired();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserLogins)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserRole>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.RoleId });

                entity.HasIndex(e => e.RoleId, "IX_AspNetUserRoles_RoleId");

                entity.HasOne(d => d.Role)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.RoleId);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserRoles)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<AspNetUserToken>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });

                entity.HasOne(d => d.User)
                    .WithMany(p => p.AspNetUserTokens)
                    .HasForeignKey(d => d.UserId);
            });

            modelBuilder.Entity<OutdoorProduct>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Name).IsRequired();
            });

            modelBuilder.Entity<Persistence.Models.Popularity>(entity =>
            {
                entity.ToTable("Popularity");
            });

            modelBuilder.Entity<Persistence.Models.Trail>(entity =>
            {
                entity.HasOne(d => d.Popularity)
                    .WithMany(p => p.Trails)
                    .HasForeignKey(d => d.PopularityId)
                    .HasConstraintName("fk_trails_popularity");

                entity.HasOne(d => d.RatingNavigation)
                    .WithMany(p => p.Trails)
                    .HasForeignKey(d => d.RatingId)
                    .HasConstraintName("fk_trails_rating");

                entity.HasOne(d => d.TrailType)
                    .WithMany(p => p.Trails)
                    .HasForeignKey(d => d.TrailTypeId)
                    .HasConstraintName("fk_trail_trailtypelength");
            });

            modelBuilder.Entity<TrailLengthType>(entity =>
            {
                entity.ToTable("TrailLengthType");

                entity.Property(e => e.Id).ValueGeneratedNever();
            });
        }
    }
}
