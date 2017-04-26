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

test('should return an array of html as first argument', assert => {
  assert.plan(1)
  const args = html('<button>hello world!</button>')
  assert.equal(args[0][0], '<button>hello world!</button>')
})

test('should chunk html if placeholder', assert => {
  assert.plan(1)
  const args = html('<button>${label}</button>')
  assert.deepEqual(args[0], ['<button>','</button>'])
})
