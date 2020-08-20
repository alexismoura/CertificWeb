using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CertificBr.Data.EntityFramework.Entity.Containers;

namespace CertificBr.Data.EntityFramework.Mapping.Containers
{

    public class CertificadoMap : IEntityTypeConfiguration<Certificado> 
    {
	    public void Configure(EntityTypeBuilder<Certificado> builder)
	    {
		    builder.ToTable("Certificado", "db_a43bc6_certif");
            builder.HasKey("IdCertificacao","CodigoConta");

        }
    }

}