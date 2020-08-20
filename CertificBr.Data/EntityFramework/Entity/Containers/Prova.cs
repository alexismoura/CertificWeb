using System;
using System.Collections.Generic;
using System.Text;

namespace CertificBr.Data.EntityFramework.Entity.Containers
{
    public class Prova
    {
        public int IdProva { get; set; }
		public int NumeroQuestoes { get; set; }
		public int TempoRealizacao { get; set; }
		public int NotaGeral { get; set; }
		public DateTime Data { get; set; }
		public byte Resultado { get; set; }
		public int IdCertificacao { get; set; }
		public int IdIdioma { get; set; }
    }
}
