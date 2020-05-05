
'use strict';

/**
 * Determine if a value is undefined, if so return false
 *
 * @param value
 * @returns boolean
 */
module.exports = function (value) {
	return typeof value !== undefined && typeof value !== 'undefined';
};
