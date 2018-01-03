// var add = require('./index.js');
var expect = require('chai').expect; // 添加断言

// describe('User', function(){
//   describe('#save()', function(){
//     it('should save without error', function(done){
//       var user = new User('Luna');
//       user.save(function(err){
//         if(err) done(err);
//         else done();
//       })
//     })
//   })
// })

describe('timeout', function(){
  it('测试应该在5000ms后结束', function(done){
    var x = true;
    var f = function(){
      x = false;
      expect(x).to.be.not.ok;
      done(); // 测试结束，如果删掉，会有超时报错
    };
    setTimeout(f, 4000);
  })
})

// Mocha默认每个测试用例最多执行2000毫秒，改变默认超时设置
// mocha -t 5000 test.js
