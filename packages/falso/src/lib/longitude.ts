import { FakeOptions, fake, getRandomInRange } from './core';

export function longitude<Options extends FakeOptions>(options?: Options) {
  return fake(
    () =>
      getRandomInRange({
        min: -180,
        max: 180,
        fraction: 3,
      }),
    options
  );
}
