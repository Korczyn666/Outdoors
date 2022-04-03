using System;
using System.Collections.Generic;

#nullable disable

namespace Persistence.Models
{
    public partial class OutdoorProduct
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Redirect { get; set; }
        public int Rating { get; set; }
    }
}
