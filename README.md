# fast-wait

Delay a promise a specified amount of time. Always fast as possible.
For empty delay it will try to resolve fast as possible. For delay > 0 it will use standard setTimeout

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/fast-wait.svg?style=flat-square
[npm-url]: https://www.npmjs.com/fast-wait
[travis-image]: https://img.shields.io/travis/seeden/fast-wait/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/seeden/fast-wait
[coveralls-image]: https://img.shields.io/coveralls/seeden/fast-wait/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/seeden/fast-wait?branch=master
[github-url]: https://github.com/seeden/fast-wait

## Usage

```js
import wait from 'fast-wait';

async function test() {
  await wait(); // it will use Promise#then

  await wait(200); // it will use setTimeout
}

test();
```

## Performance

```sh
fast-wait x 10000 = 52ms
setTimeout x 10000 = 12957ms
```

# Support us

Star this project on [GitHub][github-url].

## Credits

[Zlatko Fedor](http://github.com/seeden)
