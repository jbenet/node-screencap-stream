#!/usr/bin/env node

if (process.argv.indexOf('-h') >= 0 || process.argv.indexOf('--help') >= 0) {
  console.log('usage: ' + process.argv[0])
  console.log('take a screenshot (png) and output it to stdout')
  process.exit(0)
}

var screencap = require('./index')
screencap.createReadStream()
  .on('error', function(err) {
    process.stderr.write(err.toString())
    process.exit(-1)
  })
  .pipe(process.stdout)
