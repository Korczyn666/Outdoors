using API.Helpers.Models;
using API.Interfaces;
using Microsoft.ML;
using Microsoft.ML.Data;
using Microsoft.ML.Trainers;
using Microsoft.ML.Trainers.Recommender;
using Persistence;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;

namespace API.Services
{
    public class RecomendationService : IRecomendationService
    {
        private static string dataPath = Path.Combine(Environment.CurrentDirectory, "dataSet.txt");
        private static string productIdEncoded = "ProductIdEncoded";
        private static string trailIdEncoded = "TrailIdEncoded";
        private static string trailId = "TrailId";
        private static string productId = "ProductId";
        private static string score = "Score";
        public List<RecomendedProduct> RecommendProductsFromDataset(int id)
        {
            try
            {
                var context = new MLContext();
                using var outdoorcontext = new OutdoorsContext();

                var data = context.Data.LoadFromTextFile<ProductInfo>(
                            dataPath,
                            hasHeader: true,
                            separatorChar: '\t');

                var partitions = context.Data.TrainTestSplit(data, testFraction: 0.2);

                var options = new MatrixFactorizationTrainer.Options()
                {
                    MatrixColumnIndexColumnName = productIdEncoded,
                    MatrixRowIndexColumnName = trailIdEncoded,
                    LabelColumnName = trailId,
                    LossFunction = MatrixFactorizationTrainer.LossFunctionType.SquareLossOneClass,
                    Alpha = 0.01,
                    Lambda = 0.025,
                };

                var pipeline = context.Transforms.Conversion.MapValueToKey(
                                    inputColumnName: productId,
                                    outputColumnName: productIdEncoded)
                                .Append(context.Transforms.Conversion.MapValueToKey(
                                    inputColumnName: trailId,
                                    outputColumnName: trailIdEncoded))
                                .Append(context.Recommendation().Trainers.MatrixFactorization(options));

                var model = pipeline.Fit(partitions.TrainSet);

                var predictions = model.Transform(partitions.TestSet);
                var metrics = context.Regression.Evaluate(predictions, labelColumnName: trailId, scoreColumnName: score);

                var recomendedProducts = MakePrediction(context, outdoorcontext, model, id);

                return recomendedProducts;
            }
            catch (Exception e)
            {
                throw new Exception(e.Message.ToString());
            }
        }

        private List<RecomendedProduct> MakePrediction(MLContext context, OutdoorsContext outdoorsContext, TransformerChain<MatrixFactorizationPredictionTransformer> model, int trailId)
        {
            List<RecomendedProduct> recomendedProducts = new List<RecomendedProduct>();
            var engine = context.Model.CreatePredictionEngine<ProductInfo, ProductPrediction>(model);
            var top3 = (from m in Enumerable.Range(1, 262111)
                        let p = engine.Predict(
                           new ProductInfo()
                           {
                               ProductId = (uint)m,
                               TrailId = trailId
                           })
                        orderby p.Score descending
                        select (ProductId: m, Score: p.Score)).Take(3);

            foreach (var product in top3)
            {
                var productDb = outdoorsContext.OutdoorProducts.FirstOrDefault(x => x.Id == product.ProductId);
                if (productDb != null)
                {
                    var nameCut = CutProductName(productDb.Name);
                    recomendedProducts.Add(new RecomendedProduct
                    {
                        ProductId = product.ProductId,
                        ProductName = productDb.Name ?? string.Empty,
                        ProductNameCut = nameCut
                    });
                }

            }

            return recomendedProducts;
        }
        private string CutProductName(string productName)
        {
            return Regex.Replace(productName, @"[\d-]", string.Empty);
        }
    }
}