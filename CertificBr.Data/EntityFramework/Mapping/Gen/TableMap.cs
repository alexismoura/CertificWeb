using CertificBr.Data.EntityFramework.Entity.Gen;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace CertificBr.Data.EntityFramework.Mapping.Gen
{
    public class TableMap : IEntityTypeConfiguration<Table>
    {
        public void Configure(EntityTypeBuilder<Table> builder)
        {

            builder
                .ToTable("TABLES", "information_schema")
                .HasNoKey();
        }
    }
}
