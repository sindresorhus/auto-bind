'use strict';
module.exports = function (self) {
	Object.getOwnPropertyNames(self.constructor.prototype).forEach(function (key) {
		var val = self[key];

		if (key !== 'constructor' && typeof val === 'function') {
			self[key] = val.bind(self);
		}
	});
};
