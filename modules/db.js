const config = {
    server: '(localdb)\\MyInstance',
    database:  'BusinessDB',
    options: {
        trustedconnection:  true,
        enableArithAbort:  true
      }
  }

const  sql = require('mssql/msnodesqlv8');
let  pool = new sql.ConnectionPool(config);

pool.connect();

const connPool = {
    pool: pool
}

module.exports = connPool;