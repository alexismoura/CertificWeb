using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CertificBr.Data.EntityFramework.Entity.Containers;

namespace CertificBr.Data.EntityFramework.Mapping.Containers
{

    public class ProvaMap : IEntityTypeConfiguration<Prova> 
    {
	    public void Configure(EntityTypeBuilder<Prova> builder)
	    {
		    builder.ToTable("Prova", "db_a43bc6_certif");
            builder.HasKey("IdProva");

        }
    }

}