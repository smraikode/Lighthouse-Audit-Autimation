const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const supertest = require('supertest');

const app = require('../index').app;

describe('Lighthouse Audit API', () => {
  let request;

  beforeEach(() => {
    request = supertest(app);
  });

  it('should return status 204 on successful audit', (done) => {
    request
      .get('/')
      .expect(204)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  it('should return status 500 on audit error', (done) => {
    // Simulate an error during the audit
    sinon.stub(console, 'error').throws(new Error('Audit Error'));

    request
      .get('/')
      .expect(500)
      .end((err, res) => {
        if (err) return done(err);

        // Restore the console.error stub
        console.error.restore();
        done();
      });
  });
});
