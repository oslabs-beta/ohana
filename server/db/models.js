const { Pool } = require('pg');
const myURI = 'postgres://dpirqosf:GO-od4gCw1zxnxJC02-wBJ-0OdFd9wLe@kashin.db.elephantsql.com/dpirqosf';
const URI = process.env.PG_URI || myURI;
const pool = new Pool({
  connectionString: URI
});
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};