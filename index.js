

module.exports = function(html, data = {}) {
  let chunks = []
  let args = []
  let start = 0
  html.replace(/\$\{([^{}]*)\}/g, function(_, placeholder, idx) {
    const value = data[placeholder]
    if(value) args.push(value)
    chunks.push(html.substring(start, idx))
    start = idx + 3 + placeholder.length
  })
  chunks.push(html.substring(start, html.length))
  return [chunks, ...args]
}
