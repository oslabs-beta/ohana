const userController = require('../server/controllers/userController')
const { Pool } = require('pg');
import { jest } from '@jest/globals';

const myURI = 'postgres://calxwrwx:LmX5QBLtJ4IC4iyuJy3pbWm-KlFNxJFB@kashin.db.elephantsql.com/calxwrwx';


describe('db unit tests', () => {
  // async callback to run before every all tests run
  beforeAll((done) => {
    console.log('connecting to db')

    const pool = new Pool({
      connectionString: myURI
    });

    const db = {
      query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
      },
  };
  console.log('connected to db')
    done();
});
  // async callback to run once all tests are completed regardless of pass/fail
  // afterAll((done) => {
    // testing github link


  // })
  describe('add', () => {
    it('successfully adds a user', () => {

    })
  })

  


});