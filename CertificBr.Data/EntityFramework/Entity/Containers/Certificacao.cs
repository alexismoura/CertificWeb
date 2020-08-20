using System;
using System.Collections.Generic;
using System.Text;

namespace CertificBr.Data.EntityFramework.Entity.Containers
{
    public class Certificacao
    {
        public int IdCertificacao { get; set; }
		public string Nome { get; set; }
		public string Descricao { get; set; }
		public decimal Valor { get; set; }
		public string Conteudo { get; set; }
		public string UrlBaseCredencial { get; set; }
    }
}
