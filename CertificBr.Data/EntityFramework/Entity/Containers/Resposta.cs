using System;
using System.Collections.Generic;
using System.Text;

namespace CertificBr.Data.EntityFramework.Entity.Containers
{
    public class Resposta
    {
        public int IdResposta { get; set; }
		public int IdQuestao { get; set; }
		public string Conteudo { get; set; }
		public byte Correta { get; set; }
    }
}
