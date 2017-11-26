function removeMiddle( words ){
  // words is an array which contains an odd number of strings
  // return a new array containing only the middle word
  // the words array should no longer contain the middle word
  // hint: splice
  return words.splice(Math.floor(words.length/2), 1);
}

function get2ndAnd3rd( myArray ){
  // myArray is an array of numbers
  // return an array containing the 2nd and 3rd items from myArray
  // myArray should remain unchanged
  // hint: slice
  return myArray.slice(1, 3);
}

function mapper( myArray ){
  // myArray is an array of numbers
  // return a new array which has all items in myArray incremented by one
  // myArray should remain unchanged
  // hint: map
  return myArray.map(function(a){return a += 1});
}

function wordLengths( words ){
  // words is an array of strings
  // return a new array that contains the number of letters in each word
  // hint: strings have a 'length' property
  // var num = [];
  // words.forEach(function(arr){
  //   num.push(arr.length);
  // });
  // return num;
  return words.map(function(el) {return el.length});
}

function cities( capitals, formatter ){
  // capitals is an array of objects that have a city and country property
  // for example  
  // {
  //   city: 'Paris',
  //   country: 'France'
  // }
  // formatter is a function that transforms a capital object into a sentence returns it
  // such as 'Paris is the capital of France'

  // apply formatter to each object in capitals array and return an array of resulting sentences
  var result = [];
  capitals.forEach(function(el){
    result.push(formatter(el));
  });
  return result;
}

function largerThanTen( numbers ){
  // numbers is an array of numbers
  // return a new array that contains only numbers from the input array which are greater than 10
  // hint: filter
  return numbers.filter(function(item){return item > 10});
}

function even( numbers ){
  // numbers is an array of numbers
  // return a new array that contains only even numbers from the input array
  // hint: you may want to use the modulus operator '%'
  return numbers.filter(function(item){return item % 2 === 0});
}

function findTheNeedle( words ){
  // words is an array of words
  // return the index of the word 'needle'
  // hint: indexOf
  return words.indexOf("needle");
}

function findLargest( numbers ){
  // numbers is an array of numbers
  // return the largest number from that array
  return numbers.reduce(function(a, b){return Math.max(a, b)});
}

function addAllnumbers( numbers ) {
  // numbers is an array of numbers
  // return the sum of all the numbers in the array
  return numbers.reduce(function(a, b){return a + b});
}

function average( things ) {
  // things is an array of numbers and strings
  // return the average of all the numbers
  // be sure to exclude the strings
  var arrOfNym = [];
  function sumArray(a, b){return a + b}; 

  things.forEach(function(el){
    if(typeof el === "number"){
      arrOfNym.push(el);
    }
  });
  
  return arrOfNym.reduce(sumArray) / arrOfNym.length;
}

function paintShop( cars, colour ){
  // cars is an array of objects that have 
  // their properties are `make`, `model` and `colour`

  // for example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red'
  // }

  // set the colour of each Ford car to be the colour 
  // passed in and return the new array

  // the original array passed in should not change
  // hint: look up 'Cloning objects in JavaScript'
  var copy = [];
  cars.forEach(function(el){
    copy.push(Object.assign({}, el));
  });
  copy.forEach(function(el){
      el.colour = colour;
  });
  return copy;
}

function sales( cars ){
  // cars is an array of objects that have been sold
  // their properties are `make`, `model`, `colour` and `price`

  // for example
  // {
  //   make: 'Ford',
  //   model: 'Fiesta',
  //   color: 'red',
  //   price: 5999
  // }

  // calculate and return the total sales for each make and return the totals
  // the output should like a bit like

  // {
  //   'Ford': 20000,
  //   'Vauxhall': 15000
  // }
  var total = {};
  
  cars.forEach(function(el){
    total[el.make] = total[el.make] || 0;
    total[el.make] += el.price;
  });
  return total;
}

// Harder challenges
function secondLargest( numbers ){
  // numbers is an array of numbers
  // return the index of the second 
  // largest number in the array
  var max = numbers.reduce(function(a, b) {return Math.max(a, b)});
  numbers.splice(numbers.indexOf(max), 1);
  var secondMax = numbers.reduce(function(a, b) {return Math.max(a, b)});
  
  return numbers.indexOf(secondMax);

  // for(var i = 0; i < numbers.length; i++){
  //   if(numbers[i] === secondMax){
  //     return i;
  //   }
  // }
}

function factorial( int ) {
  // int is an integer
  // a factorial is the product of all non-negative integers
  // less than or equal to the iniital number.

  // for example the factorial of 5 is 120
  // 120 = 1 * 2 * 3 * 4 * 5

  // calculate and return the factorial of int
  // note: factorial of 0 is 1
  var result = 1;
  for(var i = 1; i <= int; i++){
    result *= i;
  }
  return result;
}

module.exports = {
  removeMiddle,
  get2ndAnd3rd,
  mapper,
  wordLengths,
  cities,
  largerThanTen,
  even,
  findTheNeedle,
  findLargest,
  addAllnumbers,
  average,
  paintShop,
  sales,
  secondLargest,
  factorial
};
