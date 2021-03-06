var assert = chai.assert;

describe('Singleton.js', function () {
  describe('#Singleton()', function () {
    // Singleton init
    
    it('should return a preloader object', function () {
      var singleton = Singleton([1,2]);
      assert.typeOf(singleton, 'object', 'we have an object');
    });
    it('should return a list array', function () {
      var singleton = Singleton([1,2]);
      var list = singleton.list();
      assert.lengthOf(list, 2, 'list value has a length of 2');
    });
    it('should extend current singleton object', function() {
      var singleton = Singleton();

      Singleton.prototype.add = function (value) {
        this.innerArray.push(value);
      }

      singleton.add(3);
      
      var list = singleton.list();

      assert.lengthOf(list, 3, 'list value has a length of 3');
    });
  });
});
