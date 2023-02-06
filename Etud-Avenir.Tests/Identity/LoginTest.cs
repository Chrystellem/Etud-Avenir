using Etud_Avenir.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Etud_Avenir.Tests.Identity
{
    public class LoginTest : EtudAvenirBaseTest, IClassFixture<EtudAvenirTestFactory<Startup>>
    {
        public LoginTest(EtudAvenirTestFactory<Startup> factory) : base(factory) { }

        [Fact]
        public async Task UncreatedUser_TryToLogIn_Returns404()
        {
            var email = "jean@gmail.com";
            var password = "ThisIsAStrongPassw0rd!";

            var response = await LoginUser(email, password);
            Assert.Equal(HttpStatusCode.NotFound, response.StatusCode);
        }

        [Theory]
        [InlineData("jeangmail.com", "ThisIsAStrongPassw0rd!")]
        [InlineData("", "ThisIsAStrongPassw0rd!")]
        [InlineData("jean@gmail.com", "")]
        [InlineData("", "")]
        public async Task BadRequest_Returns400(string email, string password)
        {
            await RegisterUser(email, password);

            var response = await LoginUser(email, password);
            Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);
        }

        [Fact]
        public async Task CorrectCredential_Should_LogIn()
        {
            var email = $"{Guid.NewGuid()}@gmail.com";
            var password = "ThisIsAStrongPassw0rd!";
            var responseRegistration = await RegisterUser(email, password);
            Assert.Equal(HttpStatusCode.OK, responseRegistration.StatusCode);

            ConfirmEmail(email);

            var response = await LoginUser(email, password);
            Assert.Equal(HttpStatusCode.OK, response.StatusCode);
        }
    }
}
