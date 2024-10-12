using Microsoft.Graph.Models;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Services;

public interface IEntraUserService
{
    Task<User?> GetByIdAsync(string id);
    Task<IEnumerable<User>> FilterAsync(string query);
    Task<IEnumerable<User>> GetAllAsync(int skip, int take);
}