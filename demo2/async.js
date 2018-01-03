var request = require('superagent'); // request
var expect = require('chai').expect; // 添加断言

describe('async', function(){
  it('async', function(done){
    request
      .get('https://api.github.com')
      .end(function(err, res){
        expect(res).to.be.an('object');
        done();
      })
  })
})
