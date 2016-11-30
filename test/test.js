'use strict';

const expect = require('chai').expect;
const lihkg = require('../lib/lihkg');
const Constants = require('../lib/constants');

describe('Threads', () => {

  it('should get the latest threads from 吹水台', done => {
    lihkg.getLatestThreads().then(result => {
      expect(result.response.category.name).to.equal('吹水台');
      done();
    });
  });

  it('should get the latest threads from 軟件台', done => {
    lihkg.getChannel(Constants.CATEGORY.SOFTWARE).then(result => {
      expect(result.response.category.name).to.equal('軟件台');
      done();
    });
  });

  it('should get the a thread', done => {
    lihkg.getThread(13937).then(result => {
      expect(result.response.title).to.equal('連尼住係fb最新聲明');
      done();
    });
  });

});
