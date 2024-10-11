using Azure.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Graph;
using Our.Umbraco.Community.EntraUserPicker.Core.Configuration;
using Our.Umbraco.Community.EntraUserPicker.Core.Extensions;
using Our.Umbraco.Community.EntraUserPicker.Core.Factories;
using Our.Umbraco.Community.EntraUserPicker.Core.Services;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Extensions;

namespace Our.Umbraco.Community.EntraUserPicker.Core.DependencyInjection;

public static class UmbracoBuilderExtensions
{
    public static IUmbracoBuilder ConfigureCore(this IUmbracoBuilder builder)
    {
        builder.Services.AddSingleton<GraphServiceClient>(serviceProvider =>
        {
            var credentials = builder.Config.GetConfiguredInstance<AppSettings.Entra.GraphCredentials>("Entra:GraphCredentials");

            var scopes = new[] { "https://graph.microsoft.com/.default" };
            
            var options = new ClientSecretCredentialOptions
            {
                AuthorityHost = AzureAuthorityHosts.AzurePublicCloud,
            };

            var clientSecretCredential = new ClientSecretCredential(
                credentials.TenantId, credentials.ClientId, credentials.ClientSecret, options);

            var graphClient = new GraphServiceClient(clientSecretCredential, scopes);
            return graphClient;
        });
        builder.Services.AddUnique<IEntraUserService, EntraUserService>();

        builder.Services.AddTransient<IUserPresentationFactory, UserPresentationFactory>();

        return builder;
    }
}
