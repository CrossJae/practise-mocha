var expect = require('chai').expect; // 添加断言

describe('only和skpi', function(){
  var foo = true;
  // it.only('第1个', function(){
  //   expect(foo).to.be.equal(true);
  // });
  it.skip('第2个', function(){
    expect(foo).to.be.equal(true);
  });
  it('第3个', function(){
    expect(foo).to.be.equal(true);
  });
})
