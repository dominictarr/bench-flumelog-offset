
var cp = require('child_process')
var i = 1
console.log('k, ms')
;(function next () {
  if(i < 128) {
    var proc = cp.spawn(process.execPath, [process.argv[2], process.argv[3], i++])
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    //.stdout.pipe(process.stdout)
/   proc.on('exit', next)
  }
})()



