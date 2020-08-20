using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CertificBr.Data.EntityFramework.Entity.Containers;

namespace CertificBr.Data.EntityFramework.Mapping.Containers
{

    public class FotoMap : IEntityTypeConfiguration<Foto> 
    {
	    public void Configure(EntityTypeBuilder<Foto> builder)
	    {
		    builder.ToTable("Foto", "db_a43bc6_certif");
            builder.HasKey("IdFoto");

        }
    }

}