var hello = require('../app/hello');

describe('Hello', function() {
	it('says hello', function() {
		expect(hello()).to.be('Hello!');
	});
});
