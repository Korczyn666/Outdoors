using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(OutdoorsContext context, UserManager<AppUser> userManager)
        {
            if(!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser{DisplayName = "Outdoors_admin", UserName="outdoors_admin", Email="outdoorsAdmin@test.com"},
                    new AppUser{DisplayName = "TestUser", UserName="testUser", Email="testUser@test.com"},
                    new AppUser{DisplayName = "Szymon", UserName="szymon", Email="szymon@test.com"}
                };
                foreach(var user in users){
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
           // return null;
        }
        // public static async Task SeedTrails(OutdoorsContext context){
        //     if(context.Trails.Any())
        //     {
        //          var trails = new List<Trail>
        //          {
        //              new Trail{Name = "Góry stołowe", Country = "Polska", Diffculty = 2 },
        //              new Trail{Name = "Tatry", Country = "Polska", Diffculty = 3 },
        //              new Trail{Name = "Caminito del rey", Country = "Hiszpania", Diffculty = 4 },
        //          };
        //          foreach(var el in trails)
        //          {
        //             await context.Trails.AddAsync(el);
        //          }
        //          //context.SaveChangesAsync();
        //     }
        // }
    }
}