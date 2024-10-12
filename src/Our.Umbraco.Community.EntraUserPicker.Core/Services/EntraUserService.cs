using Microsoft.Extensions.Logging;
using Microsoft.Graph;
using Microsoft.Graph.Models;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Services;

internal class EntraUserService(GraphServiceClient graphClient, ILogger<EntraUserService> logger)
    : IEntraUserService
{
    public async Task<User?> GetByIdAsync(string id)
    {
        try
        {
            var user = await graphClient.Users[id].GetAsync();

            return user;
        }
        catch (Exception ex)
        {
            logger.LogError(ex.Message,ex);
            return null;
        }
    }

    public async Task<IEnumerable<User>> Filter(string query)
    {
        try
        {
            var users = await graphClient.Users.GetAsync((requestConfiguration) =>
            {
                requestConfiguration.QueryParameters.Filter = $"startswith(displayName, '{query}')";
            });

            if (users != null && users.Value != null)
            {
                return users.Value;
            }
        }
        catch (Exception ex)
        {
            logger.LogError(ex.Message, ex);
        }

        return Enumerable.Empty<User>();
    }

    public async Task<IEnumerable<User>> GetAll(int skip, int take)
    {
        try
        {
            var users = await graphClient.Users.GetAsync();

            if (users != null && users.Value != null)
            {
                return users.Value;
            }
        }
        catch (Exception ex)
        {
            logger.LogError(ex.Message, ex);
        }

        return Enumerable.Empty<User>();
    }
}
