const { expect } = require('chai');
const sinon = require('sinon');
const supertest = require('supertest');
const { app } = require('./index');

describe('Lighthouse Audit', () => {
  let request;

  before(() => {
    request = supertest(app);
  });

  it('should return 204 status code for successful mobile audit', async () => {
    process.env.IS_MOBILE = 'true';
    const response = await request.get('/');
    expect(response.status).to.equal(204);
    delete process.env.IS_MOBILE;
  });

  it('should return 204 status code for successful desktop audit', async () => {
    process.env.IS_MOBILE = 'false';
    const response = await request.get('/');
    expect(response.status).to.equal(204);
    delete process.env.IS_MOBILE;
  });

  it('should return 500 status code for failed audit', async () => {
    // Mock the runLighthouseAudit function to throw an error
    sinon.stub(app, 'runLighthouseAudit').throws(new Error('Audit error'));

    const response = await request.get('/');
    expect(response.status).to.equal(500);

    // Restore the stubbed function
    app.runLighthouseAudit.restore();
  });
});