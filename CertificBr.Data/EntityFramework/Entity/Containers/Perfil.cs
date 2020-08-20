using System;
using System.Collections.Generic;
using System.Text;

namespace CertificBr.Data.EntityFramework.Entity.Containers
{
    public class Perfil
    {
        public int IdPerfil { get; set; }
		public string Nome { get; set; }
		public string SobreNome { get; set; }
		public string Profissao { get; set; }
		public string Site { get; set; }
		public string Twitter { get; set; }
		public string Facebook { get; set; }
		public string Linkedin { get; set; }
		public string Youtube { get; set; }
		public int IdFoto { get; set; }
    }
}
