import wait from './index';

async function run(name, fn, times) {
  let start = Date.now();

  for (let i = 0; i < times; i++) {
    await fn();
  }

  const end = Date.now();
  console.log(`${name} x ${times} = ${end - start}ms`);
}

run('setTimeout', () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}, 10000);

run('Promise#then', async () => {
  await wait();
}, 10000);


