using Our.Umbraco.Community.EntraUserPicker.Core.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;

namespace Our.Umbraco.Community.EntraUserPicker.Compose;

public class PackageComposer : IComposer
{
    public void Compose(IUmbracoBuilder builder)
    {
        builder.ConfigureCore();
    }
}
