using CertificBr.Data.EntityFramework.Contexts;
using CertificBr.Data.EntityFramework.Entity.Gen;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CertificBr.Data.EntityFramework.Repositories.Gen
{
    public class ColumnRepository
    {
        protected readonly GenDbContext _dbContext;
        protected readonly DbSet<Column> _dbSet;

        public ColumnRepository(string stringConection)
        {
            _dbContext = new GenDbContext(stringConection);
            _dbSet = _dbContext.Set<Column>();
        }

        #region Metodos sincronos
        public List<Column> List(string tableName)
        {
            return _dbSet.Where(x => x.TABLE_NAME == tableName)
                    .ToList();
        }

        public void Dispose()
        {
            _dbContext.Dispose();
        }
        #endregion
    }
}
