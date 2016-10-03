var concat = require('concat-stream')

module.exports = function (cb) {
  if (process.argv.length <= 2) {
    // use stdin
    process.stdin.pipe(concat(function (buf) {
      cb(null, buf.toString().trim())
    }))
  } else {
    process.nextTick(function () {
      cb(null, process.argv[2])
    })
  }
}
