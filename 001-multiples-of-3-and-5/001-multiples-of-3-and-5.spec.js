import { multiplesOf3and5 } from './001-multiples-of-3-and-5';


test('multiplesOf3and5(1000) should return 233168', () => {
  expect(multiplesOf3and5(1000)).toBe(233168);
});

test('multiplesOf3and5(49) should return 543', () => {
  expect(multiplesOf3and5(49)).toBe(543);
});

test('multiplesOf3and5(19564) should return 89301183', () => {
  expect(multiplesOf3and5(19564)).toBe(89301183);
});

test('multiplesOf3and5(8456) should return 16687353', () => {
  expect(multiplesOf3and5(8456)).toBe(16687353);
});