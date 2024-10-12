namespace Our.Umbraco.Community.EntraUserPicker.Core.ViewModels;

public class UserResponseModel
{
    public Guid Key { get; set; }

    public string DisplayName { get; set; } = string.Empty;

    public string? Email { get; set; } = string.Empty;
}
