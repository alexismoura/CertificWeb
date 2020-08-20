using System;
using System.Collections.Generic;
using System.Text;

namespace CertificBr.Data.EntityFramework.Entity.Containers
{
    public class Certificado
    {
        public int IdCertificacao { get; set; }
		public int CodigoConta { get; set; }
		public decimal NumeroCredencial { get; set; }
		public DateTime Data { get; set; }
    }
}
