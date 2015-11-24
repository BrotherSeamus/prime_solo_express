var random = require('./random.js');
var dollars = require('./dollars.js');

var account = {
	balance: function () {
		return dollars.USD(random.getRandom(100, 1000000));
	}
};

module.exports = account;