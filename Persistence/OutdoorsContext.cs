using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class OutdoorsContext : DbContext
    {
        public OutdoorsContext(DbContextOptions options) : base(options) {}

        public DbSet<User> Users { get; set; }
    }
}