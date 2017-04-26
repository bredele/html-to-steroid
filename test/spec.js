/**
 * Test dependencies.
 */

const test = require('tape')
const html = require('..')

test('should return an array of arguments', assert => {
  assert.plan(1)
  const args = html('<button>hello world!</button>')
  assert.equal(args instanceof Array, true)
})

test('should return an array of html chunks as first argument', assert => {
  assert.plan(2)
  const args = html('<button>hello world!</button>')
  assert.equal(args instanceof Array, true)
  assert.equal(args[0][0], '<button>hello world!</button>')
})
