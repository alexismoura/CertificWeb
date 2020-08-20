using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CertificBr.Data.EntityFramework.Entity.Containers;

namespace CertificBr.Data.EntityFramework.Mapping.Containers
{

    public class IdiomaMap : IEntityTypeConfiguration<Idioma> 
    {
	    public void Configure(EntityTypeBuilder<Idioma> builder)
	    {
		    builder.ToTable("Idioma", "db_a43bc6_certif");
            builder.HasKey("IdIdioma");

        }
    }

}