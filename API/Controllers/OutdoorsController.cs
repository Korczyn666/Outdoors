using API.Helpers.Models;
using API.Interfaces;
using Application;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [AllowAnonymous]
    public class OutdoorsController : BaseApiController
    {
        private readonly IOutdoorsService _outdoorsService;
        private readonly IRecomendationService _recomendationService;

        public OutdoorsController(IOutdoorsService outdoorsService, IRecomendationService recomendationService)
        {
            _outdoorsService = outdoorsService;
            _recomendationService = recomendationService;
        }
        [HttpGet]
        public List<Trail> GetTrails()
        {
            return _outdoorsService.GetTrails();
        }


        [HttpGet("{id}")]
        public TrailModel GetTrail(int id)
        {
            var recommendedProducts = _recomendationService.RecommendProductsFromDataset(id);
            return _outdoorsService.GetTrail(id, recommendedProducts);
        }
    }
}