using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;
using Microsoft.OpenApi.Models;
using Our.Umbraco.Community.EntraUserPicker.Core.Configuration;
using Swashbuckle.AspNetCore.SwaggerGen;
using Umbraco.Cms.Api.Management.OpenApi;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Compose;

internal class ConfigureSwaggerGenOptions : IConfigureOptions<SwaggerGenOptions>
{
    public void Configure(SwaggerGenOptions options)
    {

        options.SwaggerDoc(EntraPickerOptions.ApiName, new OpenApiInfo
        {
            Title = "Entra Picker API v1", Version = "1.0"
        });
    }
}


