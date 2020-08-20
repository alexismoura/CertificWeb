using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CertificBr.Data.EntityFramework.Entity.Containers;

namespace CertificBr.Data.EntityFramework.Mapping.Containers
{

    public class ContaMap : IEntityTypeConfiguration<Conta> 
    {
	    public void Configure(EntityTypeBuilder<Conta> builder)
	    {
		    builder.ToTable("Conta", "db_a43bc6_certif");
            builder.HasKey("IdConta");

        }
    }

}