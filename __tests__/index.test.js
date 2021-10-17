import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

test('reverse test super test 1', () => {
  expect(reverse('yes')).toEqual('sey');
  expect(reverse('test')).toEqual('tset');
});