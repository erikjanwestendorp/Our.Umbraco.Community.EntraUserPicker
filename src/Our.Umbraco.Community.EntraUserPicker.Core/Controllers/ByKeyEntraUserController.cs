﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Our.Umbraco.Community.EntraUserPicker.Core.Configuration;
using Our.Umbraco.Community.EntraUserPicker.Core.Factories;
using Our.Umbraco.Community.EntraUserPicker.Core.Services;
using Our.Umbraco.Community.EntraUserPicker.Core.ViewModels;
using Umbraco.Cms.Api.Common.Attributes;
using Umbraco.Cms.Api.Management.Controllers;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Controllers;

[ApiController]
[Route("/api/entra/user")]
[MapToApi(EntraPickerOptions.ApiName)]
public class ByKeyEntraUserController(
    IEntraUserService entraUserService, 
    IUserPresentationFactory userPresentationFactory) : ManagementApiControllerBase
{
    [HttpGet("{id:guid}")]
    [ProducesResponseType(typeof(UserResponseModel), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Get(CancellationToken cancellationToken, Guid id)
    {
        //TODO Add Authorization
        var user = await entraUserService.GetByIdAsync(id.ToString());

        if (user == null)
        {
            return NotFound();
        }

        var responseModel = userPresentationFactory.CreateResponseModel(user);

        return Ok(responseModel);
    }
}
