using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CertificBr.Data.EntityFramework.Entity.Containers;

namespace CertificBr.Data.EntityFramework.Mapping.Containers
{

    public class TipocontaMap : IEntityTypeConfiguration<Tipoconta> 
    {
	    public void Configure(EntityTypeBuilder<Tipoconta> builder)
	    {
		    builder.ToTable("Tipoconta", "db_a43bc6_certif");
            builder.HasKey("IdTipoConta");

        }
    }

}