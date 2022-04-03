using API.Helpers.Models;
using System.Collections.Generic;

namespace API.Interfaces
{
    public interface IRecomendationService
    {
        public List<RecomendedProduct> RecommendProductsFromDataset(int id);
    }
}