using CertificBr.Data.EntityFramework.Mapping.Gen;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Text;

namespace CertificBr.Data.EntityFramework.Contexts
{
    public class GenDbContext : DbContext
    {
        private string _connectionString;

        public static readonly ILoggerFactory loggerFactory = LoggerFactory.Create(
                                                                    builder => {
                                                                        builder.SetMinimumLevel(LogLevel.Debug);
                                                                    });
        public GenDbContext(string conectionString)
        {
            _connectionString = conectionString;
        }

        #region Metodos Protected
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // define the database to use
            optionsBuilder
                .UseLoggerFactory(loggerFactory)
                .UseMySql(_connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //MAPEAMENTO
            modelBuilder.ApplyConfiguration(new TableMap());
            modelBuilder.ApplyConfiguration(new ColumnMap());

            base.OnModelCreating(modelBuilder);
        }

        #endregion
    }
}
