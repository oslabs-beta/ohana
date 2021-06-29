const app = require('../server/server.js');
const request = require('supertest');

const server = 'http://localhost:8080';

describe('GET requests', () => {
  it('Serves index.html from "/" endpoint', async () => {
    const response = await request(server)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
  })
  it('Sends ')
})