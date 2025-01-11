using Our.Umbraco.Community.EntraUserPicker.Core.Configuration;
using Umbraco.Cms.Api.Management.OpenApi;

namespace Our.Umbraco.Community.EntraUserPicker.Core.Compose;

public class EntraPickerApiOperationSecurityFilter : BackOfficeSecurityRequirementsOperationFilterBase
{
    protected override string ApiName => EntraPickerOptions.ApiName;
}