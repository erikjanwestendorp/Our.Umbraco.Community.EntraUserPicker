using Microsoft.Graph;
using Microsoft.Graph.Models;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Services;

internal class EntraUserService : IEntraUserService
{
    private readonly GraphServiceClient _graphClient;

    public EntraUserService(GraphServiceClient graphClient)
    {
        _graphClient = graphClient;
    }

    public async Task<User?> GetByIdAsync(string id)
    {
        try
        {
            var user = await _graphClient.Users[id].GetAsync();

            return user;
        }
        catch (ServiceException ex)
        {
            Console.WriteLine($"Error fetching user: {ex.Message}");
            throw;
        }
    }
}
