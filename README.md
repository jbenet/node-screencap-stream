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

## `ipfs-cap` binary

Capture screenshots, publish them to [IPFS](http://ipfs.io), and copy the link to the clipboard.


Examples:
```sh
# default name based on date
> ipfs-cap
http://gateway.ipfs.io/ipfs/QmfV9gpmi9yT4J4fWWJH2xdrAUYbmn3JYZPWCN5hsMnA9A/screencap.2015-07-04T01:21:00Z.png

# name argument
> ipfs-cap laser-raptor.png
http://gateway.ipfs.io/ipfs/QmdCcY49eXipYJQpZL2yAuu2Jv8QbddJE2Zub3cfwc3aPz/laser-raptor.png
```

Install it with:

```
npm install -g screencap-stream
```
