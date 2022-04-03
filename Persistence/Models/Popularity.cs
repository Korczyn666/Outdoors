using System;
using System.Collections.Generic;

#nullable disable

namespace Persistence.Models
{
    public partial class Popularity
    {
        public Popularity()
        {
            Trails = new HashSet<Trail>();
        }

        public int Id { get; set; }
        public string PlaceToVisit { get; set; }

        public virtual ICollection<Trail> Trails { get; set; }
    }
}
