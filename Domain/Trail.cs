using System;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Trail
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        [Range(1, 10)]
        public int Diffculty { get; set; }
        public int? Distance { get; set; }
        public Guid? RatingId { get; set; }
        public Guid? PopularityId { get; set; }
        
    }
}