using CertificBr.Data.EntityFramework.Entity.Gen;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace CertificBr.Data.EntityFramework.Mapping.Gen
{
    public class ColumnMap : IEntityTypeConfiguration<Column>
    {
        public void Configure(EntityTypeBuilder<Column> builder)
        {
            builder
                .ToTable("COLUMNS", "INFORMATION_SCHEMA")
                .HasNoKey();
        }
    }
}
