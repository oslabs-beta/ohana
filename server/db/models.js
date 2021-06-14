const { Pool } = require('pg');
const myURI = 'postgres://dpirqosf:GO-od4gCw1zxnxJC02-wBJ-0OdFd9wLe@kashin.db.elephantsql.com/dpirqosf';
const URI = process.env.PG_URI || myURI;
<<<<<<< HEAD

const pool = new Pool({
  connectionString: URI
});

=======
const pool = new Pool({
  connectionString: URI
});
>>>>>>> 3f1d85a648ea0ebd0e82bdc6b95c70b073971028
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};