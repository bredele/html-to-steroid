

module.exports = function(html) {
  let chunks = []
  let start = 0
  html.replace(/\$\{([^{}]*)\}/g, function(_, placeholder, idx) {
    chunks.push(html.substring(start, idx))
    start = idx + 3 + placeholder.length
  })
  chunks.push(html.substring(start, html.length))
  return [chunks]
}
