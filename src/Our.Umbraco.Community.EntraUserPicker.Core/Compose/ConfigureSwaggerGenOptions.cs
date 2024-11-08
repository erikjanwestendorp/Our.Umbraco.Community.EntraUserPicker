using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.SwaggerGen;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Compose;

internal class ConfigureSwaggerGenOptions : IConfigureOptions<SwaggerGenOptions>
{
    public void Configure(SwaggerGenOptions options)
    {

        options.SwaggerDoc("entra-picker-api-v1", new OpenApiInfo
        {
            Title = "Entra Picker API v1", Version = "1.0"
        });
    }
}
