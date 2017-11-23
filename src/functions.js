function removeMiddle( words ){
  // words is an array which contains an odd number of strings
  // return a new array containing only the middle word
  // the words array should no longer contain the middle word
  // hint: splice
 return words.splice(Math.floor(words.length/2),1);
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
  return myArray.map(function(num) {
    return num +1;
  });
}

function wordLengths( words ){
  // words is an array of strings
  // return a new array that contains the number of letters in each word
  // hint: strings have a 'length' property
  return words.map(function(num) {return num.length});
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
return capitals.map(function(mm){return `${mm.city} is the capital of ${mm.country}`;})
}

function largerThanTen( numbers ){
  // numbers is an array of numbers
  // return a new array that contains only numbers from the input array which are greater than 10
  // hint: filter
  return numbers.filter(function(number) { return number > 10;})
}

function even( numbers ){
  // numbers is an array of numbers
  // return a new array that contains only even numbers from the input array
  // hint: you may want to use the modulus operator '%'
  return numbers.filter(function(numbe) { return !(numbe % 2);})
}

function findTheNeedle( words ){
  // words is an array of words
  // return the index of the word 'needle'
  // hint: indexOf
  return words.indexOf('needle');
}

function findLargest( numbers ){
  // numbers is an array of numbers
  // return the largest number from that array
  return Math.max(...numbers)
  // return numbers.reduce(function(a, b) {return Math.max(a, b)})
}

function addAllnumbers( numbers ) {
  // numbers is an array of numbers
  // return the sum of all the numbers in the array
 return numbers.reduce(function(a, b) { return a + b})
}

function average( things ) {
  // things is an array of numbers and strings
  // return the average of all the numbers
  // be sure to exclude the strings
  // var result=0,len=0;
  // for (var i=0;i<things.length; i++){
  //   if(Number.isInteger(things[i])){
  //     len++;
  //     result+=things[i];
  //   }
  // }
  // return result/len;
  var num =  things.filter(function(item){return typeof item =='number';});
  var leng = num.length;
  var sum = num.reduce(function(a, b) {return a + b;});
  return sum/leng;
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
  var paint = [];
  cars.forEach(function(color){
    paint.push(Object.assign({}, color));
  });
  paint.forEach(function(color){
      color.colour = colour;
  });
  return paint; 
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
   cars.forEach(function(same){
      total[same.make] = total[same.make] || 0;
      total[same.make] += same.price;});
    return total;
  
}

// Harder challenges
function secondLargest( numbers ){
  // numbers is an array of numbers
  // return the index of the second 
  // largest number in the array
var maximom=Math.max(...numbers);
var x=numbers.indexOf(maximom);
numbers.splice(x, 1);
var second=Math.max(...numbers);
return z=numbers.indexOf(second);
}

function factorial( int ) {
  // int is an integer
  // a factorial is the product of all non-negative integers
  // less than or equal to the iniital number.

  // for example the factorial of 5 is 120
  // 120 = 1 * 2 * 3 * 4 * 5

  // calculate and return the factorial of int
  // note: factorial of 0 is 1
  return (int <= 1)?1:factorial(int - 1)* int;
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
