using Microsoft.ML.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helpers.Models
{
    public class ProductInfo
    {
        [LoadColumn(0)] public float ProductId { get; set; }
        [LoadColumn(1)] public float TrailId { get; set; }
    }
}
