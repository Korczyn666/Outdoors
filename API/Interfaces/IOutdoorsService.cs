using API.Helpers.Models;
using Persistence.Models;
using System.Collections.Generic;

namespace API.Interfaces
{
    public interface IOutdoorsService
    {
        public List<Trail> GetTrails();
        public TrailModel GetTrail(int id, List<RecomendedProduct> recommendedProducts);
    }
}