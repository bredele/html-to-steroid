/**
 * Test dependencies.
 */

const test = require('tape')
const html = require('..')

test('should return an array of arguments with a single chunk of html as first index', assert => {
  assert.plan(2)
  const args = html('<button>hello world!</button>')
  assert.equal(args instanceof Array, true)
  assert.equal(args[0][0], '<button>hello world!</button>')
})
