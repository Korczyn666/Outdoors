using System;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Trail
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        [Range(1, 10)]
        public int Diffculty { get; set; }
        public int? Distance { get; set; }
        public int? RatingId { get; set; }
        public int? PopularityId { get; set; }
        public string ImageTitle { get; set; }  
        public string Description { get; set; }
        
    }
}