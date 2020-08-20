using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CertificBr.Data.EntityFramework.Entity.Containers;

namespace CertificBr.Data.EntityFramework.Mapping.Containers
{

    public class CertificacaoMap : IEntityTypeConfiguration<Certificacao> 
    {
	    public void Configure(EntityTypeBuilder<Certificacao> builder)
	    {
		    builder.ToTable("Certificacao", "db_a43bc6_certif");
            builder.HasKey("IdCertificacao");

        }
    }

}