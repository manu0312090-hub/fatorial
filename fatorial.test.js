const f = require('./fatorial');
test('5! = 120', () => {
    expect(f(5)).toBe(120);
});
test('0! = 1', () => {
    expect(f(0)).toBe(1);
});
