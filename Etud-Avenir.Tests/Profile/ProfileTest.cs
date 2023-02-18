using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Etud_Avenir.Tests.Profile
{
    public class ProfileTest : EtudAvenirBaseTest, IClassFixture<EtudAvenirTestFactory<Startup>>
    {
        public ProfileTest(EtudAvenirTestFactory<Startup> factory) : base(factory) { }

        [Fact]
        public async Task CannotAccessPage_If_Disconnected()
        {
            var email = $"{Guid.NewGuid()}@gmail.com";
            var password = "ThisIsAnAmazingPassw0rd!";
            await RegisterUser(email, password);
            await ConfirmEmail(email);
            await LoginUser(email, password);

        }
    }
}
