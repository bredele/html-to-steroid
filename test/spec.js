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

test('should chunk html and substitute placeholder', assert => {
  assert.plan(1)
  const args = html('<button>${label}</button>', {
    label: 'hello world!'
  })
  assert.deepEqual(args, [['<button>','</button>'], 'hello world!'])
})

test('should substitute with an empty string if placeholder does not exist', assert => {
  assert.plan(1)
  const args = html('<button>${label}</button>', {})
  assert.deepEqual(args, [['<button>','</button>'], ''])
})

test('should substitute multiple values', assert => {
  assert.plan(1)
  const args = html('<button>${hello} ${world}</button>', {
    hello: 'hello',
    world: 'world!'
  })
  assert.deepEqual(args, [['<button>',' ', '</button>'], 'hello', 'world!'])
})

test('should substitute multiple times the same value', assert => {
  assert.plan(1)
  const args = html('<button data-test="${label}">${label}</button>', {
    label: 'hello world!'
  })
  assert.deepEqual(args, [['<button data-test="','">', '</button>'], 'hello world!', 'hello world!'])
})
