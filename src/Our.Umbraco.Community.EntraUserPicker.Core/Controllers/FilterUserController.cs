using Microsoft.AspNetCore.Mvc;
using Our.Umbraco.Community.EntraUserPicker.Core.Configuration;
using Our.Umbraco.Community.EntraUserPicker.Core.Factories;
using Our.Umbraco.Community.EntraUserPicker.Core.Services;
using Our.Umbraco.Community.EntraUserPicker.Core.ViewModels;
using Umbraco.Cms.Api.Common.Attributes;
using Umbraco.Cms.Api.Management.Controllers;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Controllers;

[ApiController]
[Route("api/entra/user")]
[MapToApi(EntraPickerOptions.ApiName)]
public class FilterUserController(
    IEntraUserService entraUserService, 
    IUserPresentationFactory userPresentationFactory) : ManagementApiControllerBase
{
    [HttpGet("filter")]
    public async Task<IActionResult> Filter(CancellationToken cancellationToken, string filter)
    {
        var users = await entraUserService.FilterAsync(filter);

        if (users.Any())
        {
            //TODO Update UserPresentationFactory
            var result = new List<UserResponseModel>();
            foreach (var user in users)
            {
                result.Add(userPresentationFactory.CreateResponseModel(user));
            }

            return Ok(result);
        }

        return NotFound();
    }
}
