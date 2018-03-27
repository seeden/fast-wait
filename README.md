# fast-wait
Delay a promise a specified amount of time. Always fast as possible.

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/fast-wait.svg?style=flat-square
[npm-url]: https://www.npmjs.com/fast-wait
[travis-image]: https://img.shields.io/travis/seeden/fast-wait/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/seeden/fast-wait
[coveralls-image]: https://img.shields.io/coveralls/seeden/fast-wait/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/seeden/fast-wait?branch=master
[github-url]: https://github.com/seeden/fast-wait

For !delay it will try to resolve fast as possible via tickedoff package

- Using `setTimeout` is actually a bit slow because its clamped to 4ms
- `setImmediate` is not available in most places (and probably never will be)
- `process.nextTick` is only in Node
- `Promise#then` needs polyfills in places
- `tickedoff` uses whatever the best available option is
- There are more robust libraries/polyfills but they are larger in size
- This is all especially good for libraries to use

For delay > 0 it will use standard setTimeout

## Perf

```sh
process.nextTick x 10000 = 24ms
Promise#then x 10000 = 29ms
setImmediate x 10000 = 68ms
setTimeout x 10000 = 13506ms

# Support us

Star this project on [GitHub][github-url].

## Usage

```js
import wait from 'fast-wait';

async function test() {
  await wait(); // it will use process.nextTick || Promise#then || setImmediate || setTimeout

  await wait(200); // it will use setTimeout
}
```


## Credits

[Zlatko Fedor](http://github.com/seeden)
