using System;
using System.Collections.Generic;
using System.Text;

namespace CertificBr.Data.EntityFramework.Entity.Containers
{
    public class Conta
    {
        public int IdConta { get; set; }
		public string Email { get; set; }
		public string Senha { get; set; }
		public int IdPerfil { get; set; }
		public int IdTipoConta { get; set; }
    }
}
