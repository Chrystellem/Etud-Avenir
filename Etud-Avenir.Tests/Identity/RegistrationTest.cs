using Etud_Avenir.DTOs.Identity;
using Microsoft.AspNetCore.Mvc.Testing;
using MySqlX.XDevAPI;
using System.Text.Json;
using System;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Xunit;
using Etud_Avenir.Data;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using System.Net.Http.Json;
using Etud_Avenir.Tests.Helpers;
using System.Transactions;
using Xunit.Sdk;

namespace Etud_Avenir.Tests.Identity
{
    public class RegistrationTest : IClassFixture<EtudAvenirTestFactory<Startup>>
    {
        private readonly EtudAvenirTestFactory<Startup> _factory;
        private readonly HttpClient _client;

        public RegistrationTest(EtudAvenirTestFactory<Startup> factory) {
            _factory = factory;
            _client = factory.CreateClient();
        }

        [Theory]
        [InlineData("jean@gmail.com", "ThisIsASuperPassw0rd!", null)]
        [InlineData("jean@gmail.com", null, "ThisIsASuperPassw0rd!")]
        [InlineData(null, "ThisIsASuperPassw0rd!", "ThisIsASuperPassw0rd!")]
        [InlineData("jeangmail.com", "ThisIsASuperPassw0rd!", "ThisIsASuperPassw0rd!")]
        public async Task BadRequest_Returns404(string email, string password, string passwordConfirmation)
        {
            var payload = new RegistrationDTO
            {
                Email = email,
                Password = password,
                PasswordConfirmation = passwordConfirmation
            };

            var content = new StringContent(
                JsonSerializer.Serialize(payload),
                System.Text.Encoding.UTF8,
                "application/json");

            var response = await _client.PostAsync("/Identity/RegistrationAPI", content);

            Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
        }

        [Theory]
        [InlineData("")]
        [InlineData("Nz14%!")]
        [InlineData("abcdefghij")]
        [InlineData("ABCDEFGHIJ")]
        [InlineData("124578789")]
        [InlineData("abc2448478954")]
        [InlineData("ABC2448478954")]
        [InlineData("ABc2448478954")]
        [InlineData("!!!!!!!!!!!!")]
        public async Task InvalidPassword_Returns404(string password)
        {
            var payload = new RegistrationDTO
            {
                Email = "jeangmail.com",
                Password = password,
                PasswordConfirmation = password
            };

            var content = new StringContent(
                JsonSerializer.Serialize(payload),
                System.Text.Encoding.UTF8,
                "application/json");

            var response = await _client.PostAsync("/Identity/RegistrationAPI", content);

            Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
        }

        [Fact]
        public async Task Should_RegisterUser()
        {
            var payload = new RegistrationDTO
            {
                Email = "jean@gmail.com",
                Password = "ThisIsASuperPassw0rd!",
                PasswordConfirmation = "ThisIsASuperPassw0rd!"
            };

            var content = new StringContent(
                JsonSerializer.Serialize(payload),
                System.Text.Encoding.UTF8,
                "application/json");

            var response = await _client.PostAsync("/Identity/RegistrationAPI", content);

            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }
    }
}
