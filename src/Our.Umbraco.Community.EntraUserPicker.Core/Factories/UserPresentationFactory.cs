using Microsoft.Graph.Models;
using Our.Umbraco.Community.EntraUserPicker.Core.ViewModels;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Factories;

internal class UserPresentationFactory : IUserPresentationFactory
{
    public UserResponseModel CreateResponseModel(User user)
    {
        ArgumentNullException.ThrowIfNull(user.Id);
        ArgumentNullException.ThrowIfNull(user.DisplayName);
        ArgumentNullException.ThrowIfNull(user.Mail);

        var response = new UserResponseModel
        {
            Key = Guid.Parse(user.Id),
            DisplayName = user.DisplayName, 
            Email = user.Mail
        };

        return response;
    }
}
