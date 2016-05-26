var PI = require('../dist/es6/game.js');

describe('PI', function() {
	it('should be value of Pi', function() {
		chai.expect(PI.PI).to.equal(3.141593);
	});
});
