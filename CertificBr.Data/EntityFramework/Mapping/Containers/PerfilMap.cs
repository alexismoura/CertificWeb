using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CertificBr.Data.EntityFramework.Entity.Containers;

namespace CertificBr.Data.EntityFramework.Mapping.Containers
{

    public class PerfilMap : IEntityTypeConfiguration<Perfil> 
    {
	    public void Configure(EntityTypeBuilder<Perfil> builder)
	    {
		    builder.ToTable("Perfil", "db_a43bc6_certif");
            builder.HasKey("IdPerfil");

        }
    }

}