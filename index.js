var fs = require('fs')
var exec = require('child_process').exec

var PassThrough = require('stream').PassThrough

module.exports = capture
module.exports.createReadStream = createReadStream

function createReadStream() {
  var out = new PassThrough()
  capture(function(err, read) {
    if (err) {
      out.emit('error', err)
      return
    }

    read.pipe(out)
  })
  return out
}

function capture(cb) {
  switch (process.platform) {
  case 'darwin':
    return captureDarwin(cb)
  default:
    return cb(new Error(process.platform + " not supported yet"))
  }
}

function captureDarwin(cb) {
  var time = new Date().toISOString()
  var fpath = '/tmp/ss-' + time + '.png'
  var cmd = 'screencapture -i ' + fpath

  exec(cmd, function(err, stdout, stderr) {
    if (err) {
      return cb(err)
    }

    cb(null, fs.createReadStream(fpath))
  })
}
