var expect = require('chai').expect; // 添加断言


describe('hooks', function() {
  var foo = false;
  var flag = 1;
  before(function() {
    // 在本区块的所有测试用例之前执行
  });

  after(function() {
    // 在本区块的所有测试用例之后执行
  });

  beforeEach(function() {
    // 在本区块的每个测试用例之前执行
    foo = true;
  });

  afterEach(function() {
    // 在本区块的每个测试用例之后执行
    flag += 1;
  });

  // test cases
  it('修改全局变量应该成功', function(){
    expect(foo).to.be.equal(true);
  });

  it('第二个断言', function(){
    expect(flag).to.be.equal(2);
  });
});
