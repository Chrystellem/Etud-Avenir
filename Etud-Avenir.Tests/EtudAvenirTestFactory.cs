using Etud_Avenir.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Xunit;
using Xunit.Abstractions;
using Etud_Avenir.Tests.Helpers;

namespace Etud_Avenir.Tests
{
    public class EtudAvenirTestFactory<TStartup> : WebApplicationFactory<TStartup> where TStartup : class
    {

        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureServices(services =>
            {
                var descriptor = services.SingleOrDefault(
                    d => d.ServiceType ==
                        typeof(DbContextOptions<ApplicationDbContext>));
                services.Remove(descriptor);

                services.AddDbContext<ApplicationDbContext>(options =>
                {
                    // Création d'une dbb mémoire unique entre chaque tests
                    options.UseInMemoryDatabase($"MemoryTestDatabase");
                    //options.UseInMemoryDatabase($"MemoryTestDatabase-{Guid.NewGuid()}");
                });

                //var serviceProvider = services.BuildServiceProvider();

                //using var scope = serviceProvider.CreateScope();
                //var scopedServices = scope.ServiceProvider;
                //var db = scopedServices.GetRequiredService<ApplicationDbContext>();
                //db.Database.EnsureCreated();
                //try
                //{
                //    Utilities.InitializeDbForTests(db);
                //}
                //catch
                //{
                //}
            }); 
        }

    }
}
