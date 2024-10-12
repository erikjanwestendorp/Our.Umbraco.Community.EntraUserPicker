using Microsoft.AspNetCore.Mvc;
using Our.Umbraco.Community.EntraUserPicker.Core.Factories;
using Our.Umbraco.Community.EntraUserPicker.Core.Services;
using Our.Umbraco.Community.EntraUserPicker.Core.ViewModels;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Controllers;

[Route("api/entra/user")]
public class GetAllUserController(
    IEntraUserService entraUserService,
    IUserPresentationFactory userPresentationFactory) : Controller
{
    [HttpGet("all")]
    public async Task<IActionResult> GetAll(CancellationToken cancellationToken, int skip = 0, int take = 100)
    {
        var users = await entraUserService.GetAllAsync(skip, take);

        if (users.Any())
        {
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
