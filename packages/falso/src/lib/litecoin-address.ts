import { FakeOptions, fake } from './core';
import { data } from './litecoin-address.json';

export function litecoinAddress<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
