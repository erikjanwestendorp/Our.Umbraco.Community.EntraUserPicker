namespace Our.Umbraco.Community.EntraUserPicker.Core.Configuration;

public class AppSettings
{
    public class Entra
    {
        public class GraphCredentials
        {
            public string TenantId { get; set; } = string.Empty;
            public string ClientId { get; set; } = string.Empty;
            public string ClientSecret{ get; set; } = string.Empty;
        }
    }
}
