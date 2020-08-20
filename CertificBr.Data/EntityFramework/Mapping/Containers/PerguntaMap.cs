using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using CertificBr.Data.EntityFramework.Entity.Containers;

namespace CertificBr.Data.EntityFramework.Mapping.Containers
{

    public class PerguntaMap : IEntityTypeConfiguration<Pergunta> 
    {
	    public void Configure(EntityTypeBuilder<Pergunta> builder)
	    {
		    builder.ToTable("Pergunta", "db_a43bc6_certif");
            builder.HasKey("IdQuestao");

        }
    }

}