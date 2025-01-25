const myFunctions = require('./functions.js');

test('div() divides two positive numbers', () => {
    expect(myFunctions.div(6, 3)).toBe(2);
});

test('div() divides a positive and negative number', () => {
    expect(myFunctions.div(-6, 3)).toBe(-2);
});

test('div() divides a number by 1', () => {
    expect(myFunctions.div(6, 1)).toBe(6);
});

test('div() divides by a fraction', () => {
    expect(myFunctions.div(6, 0.5)).toBe(12);
});

test('containsNumbers() detects numbers in a string', () => {
    expect(myFunctions.containsNumbers("abc123")).toBe(true);
});

test('containsNumbers() detects no numbers in a string', () => {
    expect(myFunctions.containsNumbers("abc")).toBe(false);
});

test('containsNumbers() detects numbers in a mixed string', () => {
    expect(myFunctions.containsNumbers("abc34")).toBe(true);
});

//bug detects a space as a number
test('containsNumbers() works with an empty space string', () => {
    expect(myFunctions.containsNumbers(" ")).toBe(false);
});