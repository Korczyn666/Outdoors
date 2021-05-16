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
    [AllowAnonymous]
    public class OutdoorsController : BaseApiController
    {
        private readonly OutdoorsContext _context;
        public OutdoorsController(OutdoorsContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<List<Trail>>> GetTrails()
        {
            return await _context.Trails.ToListAsync();
        }

        
         [HttpGet("{id}")]
         public async Task<ActionResult<Trail>> GetTrail(int id)
         {
             return await _context.Trails.FirstOrDefaultAsync( u => u.Id == id);
         }

    }
}