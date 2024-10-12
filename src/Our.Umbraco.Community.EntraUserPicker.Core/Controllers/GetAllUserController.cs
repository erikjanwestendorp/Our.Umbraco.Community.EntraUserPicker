using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Our.Umbraco.Community.EntraUserPicker.Core.Factories;
using Our.Umbraco.Community.EntraUserPicker.Core.Services;
using Our.Umbraco.Community.EntraUserPicker.Core.ViewModels;
using Umbraco.Cms.Api.Common.ViewModels.Pagination;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Controllers;

[Route("api/entra/user")]
public class GetAllUserController(
    IEntraUserService entraUserService,
    IUserPresentationFactory userPresentationFactory) : Controller
{
    [HttpGet("all")]
    [ProducesResponseType(typeof(PagedViewModel<UserResponseModel>), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetAll(CancellationToken cancellationToken, int skip = 0, int take = 100)
    {
        var users = await entraUserService.GetAllAsync(skip, take);

        if (users.Any())
        {
            var pagedViewModel = new PagedViewModel<UserResponseModel>()
            {
                Total = 10000,
                Items = users.Select(userPresentationFactory.CreateResponseModel)
            };

            return Ok(pagedViewModel);
        }

        return NotFound();
    }
}
