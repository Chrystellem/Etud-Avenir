using Etud_Avenir.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;

namespace Etud_Avenir.Tests
{
    public abstract class EtudAvenirBaseTest
    {
        protected readonly EtudAvenirTestFactory<Startup> _factory;
        protected readonly HttpClient _client;

        public EtudAvenirBaseTest(EtudAvenirTestFactory<Startup> factory)
        {
            _factory = factory;
            _client = factory.CreateClient();
        }

        /// <summary>
        /// Returns the database context
        /// </summary>
        /// <returns></returns>
        private ApplicationDbContext GetDatabaseContext()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase("MemoryTestDatabase")
                .Options;

            var databaseContext = new ApplicationDbContext(options);
            databaseContext.Database.EnsureCreated();
            return databaseContext;
        }

        /// <summary>
        /// Permet d'envoyer la requete pour LogIn l'utilisateur et de retourner la réponse du serveur
        /// </summary>
        /// <param name="email"></param>
        /// <param name="password"></param>
        /// <returns></returns>
        public Task<HttpResponseMessage> LoginUser(string email, string password)
        {
            return _client.PostAsJsonAsync("/Identity/LoginAPI", new
            {
                Email = email,
                Password = password,
                RememberMe = false
            });
        }

        /// <summary>
        /// Permet de créer un utilisateur
        /// </summary>
        public Task<HttpResponseMessage> RegisterUser(string email, string password, string passwordConfirmation = null)
        {
            return _client.PostAsJsonAsync("/Identity/RegistrationAPI", new
            {
                Email = email,
                Password = password,
                PasswordConfirmation = passwordConfirmation ?? password
            });
        }

        /// <summary>
        /// Permet de confirmer l'email d'un utilisateur
        /// </summary>
        /// <param name="email"></param>
        /// <exception cref="Exception"></exception>
        public void ConfirmEmail(string email)
        {
            var dbContext = GetDatabaseContext();
            var user = dbContext.Users.FirstOrDefault(x => x.Email == email);
            var users = dbContext.Users.ToList();
            if (user == null) throw new Exception("User not found");

            user.EmailConfirmed = true;
            dbContext.SaveChanges();
        }
    }
}
