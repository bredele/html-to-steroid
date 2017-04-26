

/**
 * Return a list of arguments accepted by Steroid.
 *
 * @param {String} html
 * @param {Object} data
 * @return {Array}
 * @api public
 */

module.exports = function(html, data = {}) {
  let chunks = []
  let args = []
  let start = 0
  html.replace(/\$\{([^{}]*)\}/g, function(_, placeholder, idx) {
    args.push(data[placeholder] || '')
    chunks.push(html.substring(start, idx))
    start = idx + 3 + placeholder.length
  })
  chunks.push(html.substring(start, html.length))
  return [chunks, ...args]
}
