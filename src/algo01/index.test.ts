import { addTwoNumbers } from '.';

describe('addTwoNumber', () => {
  it('returns 4 with result', () => {
    expect(addTwoNumbers(2, 2)).toBe(4);
  });
  it('return 5 with result', () => {
    expect(addTwoNumbers(15, -10)).toBe(5);
  });

  it('return false for 2 plus 2 equals 7', () => {
    expect(addTwoNumbers(2, 2)).not.toBe(7);
  });
});
