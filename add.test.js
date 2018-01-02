var add = require('./add.js');
var expect = require('chai').expect;

// 测试脚本里面应该包括一个或多个describe块
// 每个describe块应该包括一个或多个it块。
describe('加法函数的测试', function(){
  it('1加1应该等于2', function(){
    expect(add(1, 1)).to.be.equal(2); // 断言
  });
  it('任何数加0应该等于自身', function() {
    expect(add(1, 0)).to.be.equal(1);
  });
})
