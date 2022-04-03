using Persistence.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers.Models
{
    public class TrailModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public int Diffculty { get; set; }
        public int? Distance { get; set; }
        public int? RatingId { get; set; }
        public int? PopularityId { get; set; }
        public string ImageTitle { get; set; }
        public string Description { get; set; }
        public int? TrailTypeId { get; set; }
        public int? Rating { get; set; }
        public List<RecomendedProduct> RecomendedProducts { get; set; } = new List<RecomendedProduct>();

        public static TrailModel MapFromDb(Trail trail)
        {
            return new TrailModel()
            {
                Id = trail.Id,
                Name = trail.Name,
                Country = trail.Country,
                Diffculty = trail.Diffculty,
                Distance = trail.Distance,
                RatingId = trail.RatingId,
                ImageTitle = trail.ImageTitle,
                Description = trail.Description,
                TrailTypeId = trail.TrailTypeId,
                Rating = trail.Rating,
            };
        }
    }
}
