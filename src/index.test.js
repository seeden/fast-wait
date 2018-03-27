import wait from './index';

describe('Should call response', () => {
  test('without delay', async () => {
    await wait();
  });

  test('with delay', async () => {
    await wait(10);
  });
});