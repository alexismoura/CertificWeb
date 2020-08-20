using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using CertificBr.Data.EntityFramework.Contexts;
using CertificBr.Data.EntityFramework.Entity.Containers;

namespace CertificBr.Data.EntityFramework.Repositories.Containers
{
    public class IdiomaRepository
    {
        protected readonly GenDbContext _dbContext;
        protected readonly DbSet<Idioma> _dbSet;

        public IdiomaRepository(string stringConection)
        {
            _dbContext = new GenDbContext(stringConection);
            _dbSet = _dbContext.Set<Idioma>();
        }

        #region Metodos sincronos
        public IEnumerable<Idioma> List()
        {
            return _dbSet.ToList();
        }

        public void Dispose()
        {
            _dbContext.Dispose();
        }
        #endregion
    }
}
