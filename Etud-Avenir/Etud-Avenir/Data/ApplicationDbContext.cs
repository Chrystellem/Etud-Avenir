using Etud_Avenir.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Etud_Avenir.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }


        public DbSet<Curriculum> Curriculum { get; set; }

        public DbSet<Grade> Grade { get; set; }

        public DbSet<Report> Report { get; set; }

        public DbSet<School> School { get; set; }

        public DbSet<Subject> Subject { get; set; }

        public DbSet<LogEmail> LogEmails { get; set; }


    }
}