# screencap-stream

Take a screencap and return it as a stream. Today OSX. Tomorrow, CROSS PLATFORM!!!

## Usage

### streams

```js
var screencap = require('screencap-stream')
screencap.createReadStream()
  .on('error', function(err) {
    process.stderr.write(err.toString())
    process.exit(-1)
  })
  .pipe(process.stdout)
```

### callback

```js
var screencap = require('screencap-stream')
screencap(function(err, readStream) {
  ...
})
```

## `screencap` binary

Install it:

```
npm install -g screencap-stream
```

Take a screenshot (png) and output to stdout:

```
screencap
```

And now add it to ipfs:

```
screencap | ipfs add
```

And for a publish one-liner

```
echo "http://gateway.ipfs.io/ipfs/"$(screencap | ipfs add -q)
```
