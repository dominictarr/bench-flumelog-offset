
var k = +process.argv[3] || 64
var blocks = require('aligned-block-file/file')(process.argv[2], k*1024, 'r')

blocks.offset.once(function () {
  var start = 0, length = 1024
  var ts = Date.now()
  var i = 0
  blocks.get(i, function again (err, buffer, bytes) {
    if(bytes == buffer.length)
      blocks.get(++i, again)
    else {
      console.log([k, Date.now()-ts].join(','))
    }
  })
//  blocks.read(start, Math.min(start+length, blocks.offset.value), function next (err, buffer, bytes) {
//    if(err) throw err
//    if(buffer.length < length) {
//      console.log('time', Date.now()-ts)
//      return
//    }
//    start += buffer.length
//    blocks.read(start, Math.min(start+length, blocks.offset.value), next)
//  })
})



