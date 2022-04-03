using API.Helpers.Models;
using API.Interfaces;
using Persistence;
using Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace API.Services
{
    public class OutdoorService : IOutdoorsService
    {
        public List<Trail> GetTrails()
        {
            using var context = new OutdoorsContext();

            var trails = context.Trails.ToList();

            return trails;
        }

        public TrailModel GetTrail(int id, List<RecomendedProduct> recommendedProducts)
        {
            using var context = new OutdoorsContext();

            var trail = context.Trails.Find(id);

            if (trail == null)
            {
                throw new Exception("Trail null");
            }

            var item = TrailModel.MapFromDb(trail);


            item.RecomendedProducts = recommendedProducts;

            return item;
        }
    }
}