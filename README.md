# argv-or-stdin

> use the 1st argument, or, if none is present, standard input

Sometimes you want to write a tool that takes a filename as its argument.
However, if there is no argument provided, it'd be great to also accept it on
standard input.

## Usage

Let's write a simple version of the program `cat`:

`cat.js`
```js
var arg = require('argv-or-stdin')
var fs = require('fs')

arg(function (err, filename) {
  fs.createReadStream(filename)
    .pipe(process.stdout)
})
```

And test it:

```
$ cat > test
hello warld
^D

$ node cat.js test
hello warld

$ echo 'test' | node cat.js
hello warld
```

## API

```js
var arg = require('argv-or-stdin')
```

### arg(cb)

A function that will check `process.argv[2]` and, if it does not exist,
accumulate all of `process.stdin` into a string and return that.

`cb` is a callback function of the form `function (err, name) {}`.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install argv-or-stdin
```

## See Also

- [`noffle/common-readme`](https://github.com/noffle/common-readme)

## License

ISC
