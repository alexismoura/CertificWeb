using CertificBr.Data.EntityFramework.Contexts;
using CertificBr.Data.EntityFramework.Entity.Gen;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CertificBr.Data.EntityFramework.Repositories.Gen
{
    public class TableRepository
    {
        protected readonly GenDbContext _dbContext;
        protected readonly DbSet<Table> _dbSet;

        public TableRepository(string stringConection)
        {
            _dbContext = new GenDbContext(stringConection);
            _dbSet = _dbContext.Set<Table>();
        }

        #region Metodos sincronos
        public List<Table> List(string schema)
        {
            return _dbSet.Where(x => x.TABLE_SCHEMA.ToUpper() == schema)
                         .ToList();
        }

        public void Dispose()
        {
            _dbContext.Dispose();
        }
        #endregion

    }
}
