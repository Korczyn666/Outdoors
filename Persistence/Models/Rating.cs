using System;
using System.Collections.Generic;

#nullable disable

namespace Persistence.Models
{
    public partial class Rating
    {
        public Rating()
        {
            Trails = new HashSet<Trail>();
        }

        public int Id { get; set; }
        public string Comment { get; set; }

        public virtual ICollection<Trail> Trails { get; set; }
    }
}
