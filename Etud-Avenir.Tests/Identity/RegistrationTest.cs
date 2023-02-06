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
using System.ComponentModel.DataAnnotations;

namespace Etud_Avenir.Tests.Identity
{
    public class RegistrationTest : EtudAvenirBaseTest, IClassFixture<EtudAvenirTestFactory<Startup>>
    {
        public RegistrationTest(EtudAvenirTestFactory<Startup> factory) : base(factory)
        {
        }

        [Theory]
        [InlineData("jean@gmail.com", "ThisIsASuperPassw0rd!", null)]
        [InlineData("jean@gmail.com", null, "ThisIsASuperPassw0rd!")]
        [InlineData(null, "ThisIsASuperPassw0rd!", "ThisIsASuperPassw0rd!")]
        [InlineData("jeangmail.com", "ThisIsASuperPassw0rd!", "ThisIsASuperPassw0rd!")]
        public async Task BadRequest_Returns404(string email, string password, string passwordConfirmation)
        {
            var response = await _client.PostAsJsonAsync("/Identity/RegistrationAPI", new
            {
                Email = email,
                Password = password,
                PasswordConfirmation = passwordConfirmation
            });

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
            var response = await _client.PostAsJsonAsync("/Identity/RegistrationAPI", new
            {
                Email = "jeangmail.com",
                Password = password,
                PasswordConfirmation = password
            });

            Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
        }

        [Fact]
        public async Task Should_RegisterUser()
        {
            var response = await _client.PostAsJsonAsync("/Identity/RegistrationAPI", new
            {
                Email = $"{Guid.NewGuid()}@gmail.com",
                Password = "ThisIsASuperPassw0rd!",
                PasswordConfirmation = "ThisIsASuperPassw0rd!"
            });

            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }

        [Fact]
        public async Task CannotCreateUsersWithSameEmail()
        {
            var sameEmail = "robert@gmail.com";
            var password = "ThisIsASuperPassw0rd!";

            var responseUser1 = await RegisterUser(sameEmail, password);
            Assert.Equal(HttpStatusCode.OK, responseUser1.StatusCode);

            var responseUser2 = await RegisterUser(sameEmail, password);
            Assert.Equal(HttpStatusCode.InternalServerError, responseUser2.StatusCode);
        }
    }
}
