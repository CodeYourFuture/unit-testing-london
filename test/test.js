function square(arr){
  return arr.map( item => item * item);
};



test('square function', () => {
  const result = square(arr=[2, 5, 10]);

  expect( result ).toBe(arr=[4, 25, 100]);
});