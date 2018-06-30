var k = +process.argv[3] || 64
var OffsetLog = require('flumelog-offset')
var pull = require('pull-stream')

var log = OffsetLog(process.argv[2], {blockSize: k*1024, cache: false, codec: require('flumecodec/json')})

var c = 0, start = Date.now()
pull(
  log.stream(),
  pull.drain(function () {
    c ++
  }, function () {
    console.log([k, Date.now()-start].join(','))
  })
)
