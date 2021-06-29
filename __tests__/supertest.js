const app = require('../server/server.js');
const request = require('supertest');

const server = 'http://localhost:8080';

describe('GET "/"', () => {
  it('Serves the application', async () => {
    await request(server)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
  })
})

describe('POST "/user/login" - login check', () => {
  it('Logs in with correct credentials', async () => {
    const res = await request(server)
      .post('/user/login')
      .set('Content-Type', 'application/json')
      .send({email: 'test@email.com', password: '123'})
      .expect(200)
  })
  it('Sends cookies after successful login', async () => {
    const res = await request(server)
      .post('/user/login')
      .set('Content-Type', 'application/json')
      .send({email: 'test@email.com', password: '123'})
      .expect(200)
    expect(res.headers['set-cookie'].length).not.toBe(0)
  })
  it('Returns an error with incorrect credentials', async () => {
    const res = await request(server)
      .post('/user/login')
      .set('Content-Type', 'application/json')
      .send({email: 'test@email.com', password: 'incorrect'})
      .expect(500)
    expect(res.body).toBe('Incorrect username/password')
  })
})

describe('POST "/user/create" - creating user', () => {
  afterAll(async () => {
    await request(server)
      .delete('/user')
      .set('Content-type', 'application/json')
      .send({ email: 'deleteme@test.com'})
  })

  it('Adds a new user to the database', async () => {
    const res = await request(server)
      .post('/user/create')
      .set('Content-type', 'application/json')
      .send({
        email: 'deleteme@test.com',
        password: '123',
        firstName: 'test',
        lastName: 'test',
        teamName: 'ohana',
        isAdmin: 'true',
      })
      .expect(200)
    expect(res.body).toBe('Successfully added new user')
  })

  it('New user appears in the database', async () => {
    const res = await request(server)
      .get('/user')
      .expect(200)
    expect(res.body[res.body.length - 1].email).toBe('deleteme@test.com')
  })
})

describe('GET "/spaces" and "/vclusters"', () => {
  it('Receives a list of all the active namespaces', async () => {
    const res = await request(server)
      .get('/spaces/fetch')
      .expect(200)
    console.log(res.body)
    expect(Array.isArray(res.body)).toBe(true)
  })
  it('Receives a list of all the active vClusters', async () => {
    const res = await request(server)
      .get('/vclusters')
      .expect(200)
    expect(Array.isArray(res.body)).toBe(true)
  })
})