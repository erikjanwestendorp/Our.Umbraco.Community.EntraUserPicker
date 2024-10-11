using Microsoft.Extensions.Configuration;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Extensions;

internal static class ConfigurationExtensions
{
    public static T GetConfiguredInstance<T>(this IConfiguration configuration, string sectionName) where T : new()
    {
        var instance = new T();

        var section = configuration.GetSection(sectionName);
        section.Bind(instance);

        return instance;
    }
}
