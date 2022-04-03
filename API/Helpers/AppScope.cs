using API.Interfaces;
using API.Services;
using Microsoft.Extensions.DependencyInjection;

namespace API.Helpers
{
    public static class AppScope
    {
        public static void AddScope(IServiceCollection services)
        {
            services.AddScoped<IOutdoorsService, OutdoorService>();
            services.AddScoped<IRecomendationService, RecomendationService>();
        }
    }
}