using System;
using System.Collections.Generic;

#nullable disable

namespace Persistence.Models
{
    public partial class TrailLengthType
    {
        public TrailLengthType()
        {
            Trails = new HashSet<Trail>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Trail> Trails { get; set; }
    }
}
