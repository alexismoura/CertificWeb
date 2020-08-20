using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CertificBr.Data.EntityFramework.Entity.Containers;

namespace CertificBr.Data.EntityFramework.Mapping.Containers
{

    public class RespostaMap : IEntityTypeConfiguration<Resposta> 
    {
	    public void Configure(EntityTypeBuilder<Resposta> builder)
	    {
		    builder.ToTable("Resposta", "db_a43bc6_certif");
            builder.HasKey("IdResposta");

        }
    }

}