using Microsoft.Graph.Models;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Services;

public interface IEntraUserService
{
    Task<User?> GetByIdAsync(string id);
    Task<IEnumerable<User>> Filter(string query);
}