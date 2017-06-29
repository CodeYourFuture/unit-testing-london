// //1
// function square(arr){
//   return arr.map( item => item * item);
// };



// test('square function', () => {
//   const result = square([2, 5, 10]);
//   expect( result ).toEqual([4, 25, 100]);
// });

// //2
// function square(arr){
//   return arr.map( item => item * item);
// };



// test('square function', () => {
//   var array = [2, 5, 10];

//   const result = square(array);
//   expect( result ).toEqual(arr=[4, 25, 100]);
// });

//3

const square = require('../src/square');

//ES6

// import square from '../src/square';

test('square function', () => {
  var array = [2, 5, 10];
  var newArray = [4, 25, 100];

  const result = square(array);
  expect( result ).toEqual(newArray);
});

// var obj = {a: 'b'};
// // var anotherObj = {a: 'b'};

// function func(objx){
//   objx.c = 'd';
//   return objx;
// }

// var anotherObj = func(obj);

// console.log( obj === anotherObj );

// var obj = {a: 'b'};
// var anotherObj = {c: 'd'};

// obj === anotherObj //false