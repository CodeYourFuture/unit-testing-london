function removeMiddle( words ){
  remove = words.splice(2, 1)
       
  return words
// words is an array which contains an odd number of strings
// return a new array containing only the middle word
// the words array should no longer contain the middle word
// hint: splice
}
console.log(removeMiddle(words))





function get2ndAnd3rd( myArray ){
  newn = myArray.slice(2, 4)
  return newn

  // myArray is an array of numbers
  // return an array containing the 2nd and 3rd items from myArray
  // myArray should remain unchanged
  // hint: slice
}
console.log(myArray)

console.log(get2ndAnd3rd(myArray))



function mapper( myArray ){

  var addone = myArray.map(x => x + 1)
  return addone

 }
// myArray is an array of numbers
// return a new array which has all items in myArray incremented by one
// myArray should remain unchanged
// hint: map

console.log(mapper(myArray))

  // myArray is an array of numbers
  // return a new array which has all items in myArray incremented by one
  // myArray should remain unchanged
  // hint: map


function wordLengths( words ){

  nnn =words.map(x => x.length);   
  return nnn
 


// words is an array of strings
// return a new array that contains the number of letters in each word
// hint: strings have a 'length' property
//  const expected = [ 3, 6, 10, 5 ];

}
console.log(wordLengths(words))



function cities( capitals, formatter ){
  for (i=0; i<capitals.length; ++i)
return (capitals[i].city + " " + "is capital of" + " " + capitals[i].country)

  // capitals is an array of objects that have a city and country property
  // for example
  // {
  //   city: 'Paris',
  //   country: 'France'
  // }
  // formatter is a function that transforms a capital object into a sentence returns it
  // such as 'Paris is the capital of France'

  // apply formatter to each object in capitals array and return an array of resulting sentences
}

console.log(cities(capitals))

  

function largerThanTen( numbers ){
  return numbers.filter(x => x >10)
  // numbers is an array of numbers
  // return a new array that contains only numbers from the input array which are greater than 10
  // hint: filter
};
console.log(largerThanTen(numbers))



function even( numbers ){

  for (var i = 0; i < numbers.length; ++i) {
    if (numbers[i] % 2 ===0) {
      var evv = []
      evv.push(numbers[i])
        return numbers
        }
    }
          // numbers is an array of numbers
  // return a new array that contains only even numbers from the input array
  // hint: you may want to use the modulus operator '%'
}
console.log(even(numbers))



function findTheNeedle( words ){
  // words is an array of words
  // return the index of the word 'needle'
  // hint: indexOf
}

function findLargest( numbers ){
  // numbers is an array of numbers
  // return the largest number from that array
}

function addAllnumbers( numbers ) {
  // numbers is an array of numbers
  // return the sum of all the numbers in the array
}

function average( things ) {
  // things is an array of numbers and strings
  // return the average of all the numbers
  // be sure to exclude the strings
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
}

// Harder challenges
function secondLargest( numbers ){
  // numbers is an array of numbers
  // return the index of the second 
  // largest number in the array
}

function factorial( int ) {
  // int is an integer
  // a factorial is the product of all non-negative integers
  // less than or equal to the iniital number.

  // for example the factorial of 5 is 120
  // 120 = 1 * 2 * 3 * 4 * 5

  // calculate and return the factorial of int
  // note: factorial of 0 is 1
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
  secondLargest
};
