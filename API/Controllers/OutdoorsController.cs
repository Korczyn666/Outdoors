using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class OutdoorsController : BaseApiController
    {
        private readonly OutdoorsContext _context;
        public OutdoorsController(OutdoorsContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<AppUser>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUser(string id)
        {
            //FindAsync(id)
            return await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
        }

    }
}