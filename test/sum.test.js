var sum = require('../src/sum.js');
test('adds', () => {
    const result = sum(1, 2);

    expect(result).toBe(3);
});

module.exports = sum;