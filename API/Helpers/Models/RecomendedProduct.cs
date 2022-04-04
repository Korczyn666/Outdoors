using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers.Models
{
    public class RecomendedProduct
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductNameCut { get; set; }
        public string Redirect { get; set; }
    }
}
