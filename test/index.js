const test = require('tape');
const request = require('supertest');
const app = require('../server');
const agent = request.agent(app);

test('Contributions API', route => {

  const contributionsEndpoint = '/api/contributions';

  route.test(`GET ${contributionsEndpoint}`, (should)=> {

    agent.get(contributionsEndpoint)
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) {
          return should.fail(err);
        }
        should.ok(res.body instanceof Array, 'response body should be an array');
        should.equal(res.body.length, 100, 'response body should include 100 items, as the default limit');
        should.end();
      });
  });

  route.test(`GET ${contributionsEndpoint}?limit=5`, (should)=> {

    agent.get(`${ contributionsEndpoint }?limit=5`)
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) {
          return should.fail(err);
        }
        should.ok(res.body instanceof Array, 'response body should be an array');
        should.equal(res.body.length, 5, 'response body should include 5 items, as the defined limit');
        should.end();
      });
  });

});
