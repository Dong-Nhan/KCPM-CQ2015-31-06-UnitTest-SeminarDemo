var should = require('chai').should();
//const should = chai.should();
const plus = require('../lib/plus');

describe('Plus function unit testing', function () {
  it('should return the correct sum of 2 numbers', function () {
    plus(-0.01, 0).should.equal(-0.01);
    plus(0, 0.01).should.equal(0.01);
    plus(1, 2).should.equal(3);
  })

  it('should throw error when passing invalid arguments', function () {
    //wrap the expected function first
    const badFunc = () => {
      plus('1', 2);
    }
    badFunc.should.throw();
  })

  it('should return 0 when passing 2 opposite numbers ', function () {
    plus(-1, 1).should.equal(0);
    plus(-2, 2).should.equal(0);
    plus(-0, 0).should.equal(0);
    plus(-0.0000001, 0.0000001).should.equal(0);
  })
})