using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class OutdoorsContext : IdentityDbContext<AppUser>
    {
        public OutdoorsContext(DbContextOptions options) : base(options) {}

        //public DbSet<User> Users { get; set; }
        //public DbSet<AppUser> Users { get; set; }

        public DbSet<Trail> Trails {get; set;}
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Popularity> Popularity { get; set; }
    }
}