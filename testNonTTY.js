var assert = require('assert')

assert.strictEqual(Boolean(process.stdout.isTTY), false, 'This test should be run with its output piped')

var _log = console.log

console.log = function() {
	_log.apply(console, arguments)
	assert.strictEqual(arguments[0].indexOf('\u001b[0m'), -1, 'There should be no colors when piping output')
}

require('./test.js')
