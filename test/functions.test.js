var functions = require('../src/functions.js');
test('Remove middle', () => {
    const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];

    const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
    const expectedOutput = ['queen'];

    const output = functions.removeMiddle(words);

    expect(output).toEqual(expectedOutput);
    expect(words).toEqual(expectedWords);
});

test('Get second and third', () => {
    const numbers = [90, 5, 11, 5, 6];

    const expectedOutput = [5, 11];
    const expectedNumbers = [90, 5, 11, 5, 6];
    //myArray needs to be changed to numbers
    const output = functions.get2ndAnd3rd(numbers);

    expect(output).toEqual(expectedOutput);
    expect(numbers).toEqual(expectedNumbers);
});

test('Add 1 to each item in myArray', () => {
    const myArray = [31, 57, 12, 5];

    const unchanged = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];
    const output = functions.mapper(myArray);


    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);
});

test('Get word lengths', () => {
    const words = ['sun', 'potato', 'roundabout', 'pizza'];
    const expected = [3, 6, 10, 5];

    const output = functions.wordLengths(words);
    expect(output).toEqual(expected);
});

test('Get numbers greater than 10', () => {
    const numbers = [4, 10, 32, 9, 21];
    const expected = [32, 21];

    const output = functions.largerThanTen(numbers);
    expect(output).toEqual(expected);
});

test('Get even numbers', () => {
    const numbers = [22, 13, 73, 82, 4];
    const expected = [22, 82, 4];

    const output = functions.even(numbers);
    expect(output).toEqual(expected);
});

test('Find the needle', () => {
    const words = ['house', 'train', 'slide', 'needle', 'book'];
    const expected = 3;

    const output = functions.findTheNeedle(words);
    expect(output).toEqual(expected);
});

test('Find largest number', () => {
    const numbers = [3, 21, 88, 4, 36];
    const expected = 88;

    const output = functions.findLargest(numbers);
    expect(output).toEqual(expected);
});

test('Build train', () => {
    const train = functions.buildTrain(8);

    expect(train.numberOfCarriages).toEqual(8);
});

test('Book a table', () => {

    const bookTable = function() {
        this.freeTables--;
        if (this.freeTables < 0) this.freeTables = 0;
    }

    const restaurant = functions.addMethod(bookTable);
    restaurant.bookTable();
    expect(restaurant.freeTables).toBe(6);
});

test('Merge two arrays', () => {
    const arrayOne = [1, 2, 3];
    const arrayTwo = [3, 4, 5];

    const output = functions.mergeArrays(arrayOne, arrayTwo);
    const expected = [1, 2, 3, 3, 4, 5];

    expect(output).toEqual(expected);
});