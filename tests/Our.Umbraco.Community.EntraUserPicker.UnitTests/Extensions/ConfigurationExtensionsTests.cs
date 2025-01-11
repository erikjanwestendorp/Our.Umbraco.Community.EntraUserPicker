using Microsoft.Extensions.Configuration;
using Our.Umbraco.Community.EntraUserPicker.Core.Extensions;

namespace Our.Umbraco.Community.EntraUserPicker.UnitTests.Extensions;

[TestFixture]
public class ConfigurationExtensionsTests
{
    [Test]
    public void GetConfiguredInstance_ShouldReturnConfiguredInstance()
    {
        // Arrange
        const string value1 = "Value1";
        const string value2 = "Value2";
        const string section = "TestSettings";

        var testSection = new Dictionary<string, string?>
        {
            { $"{section}:{nameof(TestSettings.Key1)}", value1 },
            { $"{section}:{nameof(TestSettings.Key2)}", value2 }
        };

        var configuration = new ConfigurationBuilder()
            .AddInMemoryCollection(testSection)
            .Build();

        // Act
        var result = configuration.GetConfiguredInstance<TestSettings>(section);

        // Assert
        Assert.IsNotNull(result);
        Assert.That(result.Key1, Is.EqualTo(value1));
        Assert.That(result.Key2, Is.EqualTo(value2));
    }


    [Test]
    public void GetConfiguredInstance_ShouldReturnDefaultInstance_WhenSectionIsEmpty()
    {
        // Arrange
        const string section = "NonExistentSection";
        var configuration = new ConfigurationBuilder()
            .AddInMemoryCollection(new Dictionary<string, string?>())
            .Build();

        // Act
        var result = configuration.GetConfiguredInstance<TestSettings>(section);

        // Assert
        Assert.IsNotNull(result);
        Assert.IsNull(result.Key1);
        Assert.IsNull(result.Key2);
    }

    private class TestSettings
    {
        public string? Key1 { get; set; }
        public string? Key2 { get; set; }
    }
}
