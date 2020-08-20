using System;
using System.Collections.Generic;
using System.Text;

namespace CertificBr.Data.EntityFramework.Entity.Containers
{
    public class Pergunta
    {
        public int IdQuestao { get; set; }
		public int Numero { get; set; }
		public char ValorPontuacao { get; set; }
		public string Conteudo { get; set; }
		public int IdProva { get; set; }
    }
}
