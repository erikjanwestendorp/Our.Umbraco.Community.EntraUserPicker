using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Our.Umbraco.Community.EntraUserPicker.Core.Factories;
using Our.Umbraco.Community.EntraUserPicker.Core.Services;
using Our.Umbraco.Community.EntraUserPicker.Core.ViewModels;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Controllers;

[ApiController]
[Route("/api/entra/")]
public class EntraUserController(IEntraUserService entraUserService, IUserPresentationFactory userPresentationFactory)
    : Controller
{
    [HttpGet("{id:guid}")]
    [ProducesResponseType(typeof(UserResponseModel), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Get(Guid id)
    {
        //TODO Add Authorization
        var user = await entraUserService.GetByIdAsync(id.ToString());

        if (user == null)
        {
            return NotFound("user not found");
        }

        var responseModel = userPresentationFactory.CreateResponseModel(user);

        return Ok(responseModel);
    }
}
