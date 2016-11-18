(function () {

  'use strict';

	// var utils = require('../../dist/js/scoreboard');
 
	describe('utils', function() {
	  describe('#add', function() {
	    it('should add two numbers', function() {
	      //var actual = utils.sum(2, 4);
	      expect.equal(4, 6);
	    });
	  });
	});

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        expect(true).toBe(true);
      });
    });
  });
})();
