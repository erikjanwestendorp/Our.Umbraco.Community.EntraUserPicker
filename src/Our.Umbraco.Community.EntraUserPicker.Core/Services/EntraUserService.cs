using Microsoft.Extensions.Logging;
using Microsoft.Graph;
using Microsoft.Graph.Models;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Services;

internal class EntraUserService : IEntraUserService
{
    private readonly GraphServiceClient _graphClient;
    private readonly ILogger<EntraUserService> _logger;

    public EntraUserService(GraphServiceClient graphClient, ILogger<EntraUserService> logger)
    {
        _graphClient = graphClient;
        _logger = logger;
    }

    public async Task<User?> GetByIdAsync(string id)
    {
        try
        {
            var user = await _graphClient.Users[id].GetAsync();

            return user;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex.Message,ex);
            return null;
        }
    }
}
