using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [AllowAnonymous]
    public class OutdoorsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Trail>>> GetTrails()
        {
            return await Mediator.Send(new List.Query());
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Trail>> GetTrail(int id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

    }
}