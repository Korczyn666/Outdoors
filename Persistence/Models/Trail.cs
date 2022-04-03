using System;
using System.Collections.Generic;

#nullable disable

namespace Persistence.Models
{
    public partial class Trail
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

        public virtual Popularity Popularity { get; set; }
        public virtual Rating RatingNavigation { get; set; }
        public virtual TrailLengthType TrailType { get; set; }
    }
}
