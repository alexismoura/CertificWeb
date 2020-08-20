using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CertificBr.Data.EntityFramework.Entity.Containers;

namespace CertificBr.Data.EntityFramework.Mapping.Containers
{

    public class ContacerficacaoMap : IEntityTypeConfiguration<Contacerficacao> 
    {
	    public void Configure(EntityTypeBuilder<Contacerficacao> builder)
	    {
		    builder.ToTable("Contacerficacao", "db_a43bc6_certif");
            builder.HasKey("IdCertificacao","IdConta");

        }
    }

}