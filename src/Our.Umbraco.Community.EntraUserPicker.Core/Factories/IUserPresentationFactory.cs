using Microsoft.Graph.Models;
using Our.Umbraco.Community.EntraUserPicker.Core.ViewModels;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Factories;

public interface IUserPresentationFactory
{
    UserResponseModel CreateResponseModel(User user);
}