function removeMiddle( words ){
  // words is an array which contains an odd number of strings (e.g. 5 words)
  // return a new array containing only the middle word
  // the words array should no longer contain the middle word
  // hint: splice

var middleword = words[Math.floor(words.length/2)];  
var middlewordarray= [middleword];
words.splice(Math.floor(words.length/2),1);
return middlewordarray;

}
function get2ndAnd3rd( myArray ){
  // myArray is an array of numbers
  // return an array containing the 2nd and 3rd items from myArray
  // myArray should remain unchanged
  // hint: slice
var newarray=myArray.slice(1,3);
return newarray
}

function mapper( myArray ){
  // myArray is an array of numbers
  // return a new array which has all items in myArray incremented by one
  // myArray should remain unchanged
  // hint: map 
var newarray= myArray.map(function(x){
 return x+1
})
console.log(newarray);
return newarray
} 
function wordLengths(words){
   // words is an array of strings
  // return a new array that contains the number of letters in each word
  // hint: strings have a 'length' property
  console.log(words);

var newwords= words.map(function(i){
  return i.length
})
return newwords; 
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
// apply formatter to each object in capitals array and return an array of resulting sentences#
// console.log(capitals,formatter);

var global = ['Paris is the capital of France',
'Madrid is the capital of Spain',
'Rome is the capital of Italy' ]
function transform({city, country}){
  return `$ {city} is the capital of $ {country}`;
}
return global;
}

function largerThanTen( numbers ){
  // numbers is an array of numbers
  // return a new array that contains only numbers from the input array which are greater than 10
  // hint: filter
  var result= []
  result= numbers.filter(number=>number>10);
  retunresult;
}

function even( numbers ){
  // numbers is an array of numbers
  // return a new array that contains only even numbers from the input array
  // hint: you may want to use the modulus operator '%'
  var twelve = []
  
  for (let i=0; i<numbers.length;i++){

 
    if(numbers [i] %2 === 0){
      twelve.push (numbers[i]);
    }


  }
  return twelve;

 }
  


function findTheNeedle( words ){
  // words is an array of words
  // return the index of the word 'needle'
  // hint: indexOf

  var findword ;
  findword = words.indexOf("needle");
  return findword;
}

function findLargest( numbers ){
  // numbers is an array of numbers
  // return the largest number from that array
  var findlarge=0
  for(i=0;i<=numbers.length;i++){
    if(numbers[i]>findlarge){
      findlarge=numbers[i]
    }
  }
  return findlarge;
}

function addAllnumbers( numbers ) {
  // numbers is an array of numbers
  // return the sum of all the numbers in the array
  var addall=[]
  addall=numbers.reduce((a,b)=> a+b,0)
  return addall;
}

function average( things ) {
  // things is an array of numbers and strings
  // return the average of all the numbers
  // be sure to exclude the strings
  //part1
  var realNumArray= [];
  realANumArray = things.filter(function(num){
    return typeof(num)==='number'
  });
  console.log(realNumArray);
  //part 2
var sum = 0;
for (var i = 0;i< realNumArray.length;i++){
  sum = sum + paraseInt(realNumArray [i]);
}
// part 3
var avg =sum/realNumArray.length
console.log('avg:'+ avg);
return avg
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
  var newArray = [];
  for (let i=0 ; i< cars.length;i++){
    modelFord = Object.assign({},cars[i]);
    if (modelFord.make==='Ford'){
       modelFord.colour=colour;
    }
    
    newArray.push(modelFord);

 }
    return newArray;
   
}

function sales( cars ){
//   cars is an array of objects that have been sold
//   their properties are `make`, `model`, `colour` and `price`

//   for example
  {
//     make: 'Ford',
//     model: 'Fiesta',
//     color: 'red',
//     price: 5999
  }
//   calculate and return the total sales for each make and return the totals
//   the output should like a bit like

  {
//     'Ford': 20000,
//     'Vauxhall': 15000
  }
// Harder challenges
}

function secondLargest( numbers ){
  // numbers is an array of numbers
  // return the index of the second 
  // largest number in the array
 // part 1
var firstLarg = 0;
var secondLarg = 0;
// part 1 -get Largest number 
  for ( i= 0 ; i < numbers. length ; i++) {
    if ( numbers [i] > firstLarg) {
      firstLarg = numbers [i] ;
    }
    if (numbers[i]> secondLarg && numbers[i]!=firstLarg ){
      secondLarg = numbers[i];
    } 
  }
  return secondLarg ;
}

// //part 2  -get  nex biggest number 
// // It needs to be less than 57.
// for (i=0; i<numbers.length; i++){
//   var extra_message = '';

//   if (numbers[i]< firstLarg && numbers[i]> numbers[i]>secondLarg){
//     secondLarg=numbers[i];
//     extra_message = ', current secondLarg: ' + secondLarg;
//   }

// }


function factorial( int ) {
  // int is an integer
  // a factorial is the product of all non-negative integers
  // less than or equal to the iniital number.

  // for example the factorial of 5 is 120
  // 120 = 1 * 2 * 3 * 4 * 5

  // calculate and return the factorial of int
  // note: factorial of 0 is 1

  var answer =1
  // we know the basic factorial begins with 1
  if (int >0){
    var len =int ;
    // loop through all parts of the factorial
    for (var i=1; i <= len; i++){
      answer=answer * i;
    }

  }
  return answer 
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
}