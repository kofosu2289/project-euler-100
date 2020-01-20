import { fiboEvenSum } from './002-even-fibonacci-numbers';

test('fiboEvenSum(10) should return 44', () => {
  expect(fiboEvenSum(10)).toBe(44);
});

test('fiboEvenSum(18) should return 3382', () => {
  expect(fiboEvenSum(18)).toBe(3382);
});

test('fiboEvenSum(23) should return 60696', () => {
  expect(fiboEvenSum(10)).toBe(44);
});

test('fiboEvenSum(43) should return 350704366', () => {
  expect(fiboEvenSum(43)).toBe(350704366);
});
      
it('Returns an even number', () => {
  expect((fiboEvenSum(12) % 2)).toBe(0);
  expect((fiboEvenSum(17) % 2)).toBe(0);
  expect((fiboEvenSum(7) % 2)).toBe(0);
  expect((fiboEvenSum(15) % 2)).toBe(0);
});