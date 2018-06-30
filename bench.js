
var k = +process.argv[3] || 64
var blocks = require('aligned-block-file')(process.argv[2], k*1024, 'r')

blocks.offset.once(function () {
  var start = 0, length = 1024, i = 0
  var ts = Date.now()
  blocks.read(start, Math.min(start+length, blocks.offset.value), function next (err, buffer, bytes) {
    if(err) throw err
    ++i
    if(buffer.length < length) {
      console.log([k, Date.now()-ts].join(','))
      return
    }
    start += buffer.length
    blocks.read(start, Math.min(start+length, blocks.offset.value), next)
  })
})

