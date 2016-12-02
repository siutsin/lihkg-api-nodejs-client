'use strict';

const expect = require('chai').expect;
const lihkg = require('../lib/lihkg');
const Constants = require('../lib/constants');
const user = require('../lib/user');

describe('Auth', () => {

  it('should be able to login', done => {
    lihkg.login(process.env.TEST_LOGIN_EMAIL, process.env.TEST_LOGIN_PASSWORD).then(result => {
      expect(result.response.token).to.exist;
      expect(result.response.user).to.exist;
      expect(user.id).to.equal(result.response.user.user_id);
      expect(user.token).to.equal(result.response.token);
      done();
    });
  });

});
