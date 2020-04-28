/* test/sum.js */

var expect = require('chai').expect;
var assert = require('chai').assert;
var db = require('../src/db.js').queryDb;

describe('#connect()', function() {



  context('query', function() {
    it ('should return data', function(done) {
        db('Select * from animals').then(function(res) {
            assert(res != null);
            done();
        },
        error => alert(error)
    
        
    ).catch(function(err){
        alert(err);
        expect(false).to.be.true; //code to fail test if error occurs.
    });
  })
});
  /*
  context('with number arguments', function() {
    it('should return sum of arguments', function() {
      expect(sum(1, 2, 3, 4, 5)).to.equal(15)
    })
    
    it('should return argument when only one argument is passed', function() {
      expect(sum(5)).to.equal(5)
    })
  })
  
  context('with non-number arguments', function() {
    it('should throw error', function() {
      expect(function() {
        sum(1, 2, '3', [4], 5)
      }).to.throw(TypeError, 'sum() expects only numbers.')
    })
  })
  */
})
