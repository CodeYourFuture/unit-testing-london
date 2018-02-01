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
  return myArray.slice(1,3);
  
}

function mapper( myArray ){
  // myArray is an array of numbers
  // return a new array which has all items in myArray incremented by one
  // myArray should remain unchanged
  return myArray.map(a=>a+1);
  // hint: map
}

function wordLengths( words ){
  // words is an array of strings
  // return a new array that contains the number of letters in each word
  // hint: strings have a 'length' property
  return words.map( a=>a.length);

}

function cities(capitals, formatter) {
  // capitals is an array of objects that have a city and country property
  // for example
  // {
  //   city: 'Paris',
  //   country: 'France'
  // }
  // formatter is a function that transforms a capital object into a sentence returns it
  // such as 'Paris is the capital of France'

  // apply formatter to each object in capitals array and return an array of resulting sentences
  //var capI = capitals[i];//console.log('capital[i] is', capI);//var item = capI[key];
  //console.log('item is', item, 'key is', key);
  /* //second approach
 var a=[]
  for (var i = 0; i < capitals.length; i++) {
      a.push(formatter());
  }
  return a;
  function formatter (city, country) {
   return `${capitals[i]['city']} is the capital of ${capitals[i]['country']}`;
  } */
/* //map approach mine weird but still works!
  var a=[]
  for (var i = 0; i < capitals.length; i++) {
      a.push(formatter(capitals[i]));
  }
  return a;
  var formatter= 
    capitals.map ((city, country)=> 
   `${capitals[i]['city']} is the capital of ${capitals[i]['country']}`);
}  */
//best Lor solution i was waiting to see it!
var resultArray = capitals.map(arrayElement => `${arrayElement.city} is the capital of ${arrayElement.country}`);
return (resultArray);
}



function largerThanTen( numbers ){
  // numbers is an array of numbers
  // return a new array that contains only numbers from the input array which are greater than 10
  // hint: filter
  return numbers.filter(i=> i>10);
}

function even( numbers ){
  // numbers is an array of numbers
  // return a new array that contains only even numbers from the input array
  // hint: you may want to use the modulus operator '%'
  //numbers.filter(i => (i%2 ==0)?i:0 );
  //for(var i=0;i<numbers.length;i++){
   return numbers.filter(i => !(i&1))
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
  return Math.max(...numbers);
}

function addAllnumbers( numbers ) {
  // numbers is an array of numbers
  // return the sum of all the numbers in the array
  return numbers.reduce((a,b)=>a+b,0)
}

function average(things) {
  // things is an array of numbers and strings
  // return the average of all the numbers
  // be sure to exclude the strings
  sum = 0
  nOfNums = 0
  for (var i = 0; i < things.length; i++) {
    if (typeof things[i] === 'number') {
      sum += things[i];
      nOfNums++;
    }
  }
  return sum / nOfNums;
}

function paintShop(cars, colour) {
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
    //var a = Object.assign({},cars[i])

/*  doesnt work   var newCars=cars.slice();
    console.log(newCars)
  for (var i = 0; i < newCars.length; i++) {
    for (var key in newCars[i]) {
        if(newCars[i][key]==='Ford'){
            newCars[i]['colour']=colour;
    }}}
    return newCars;
  } */
  var copy = [];
  for (i = 0; i < cars.length; i++) {
    copy[i] = Object.assign({}, cars[i]);
    if (copy[i].make === 'Ford')
      copy[i].colour = colour;
  }
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
 /*  for(var i=0;i<cars.length;i++){
    for(var key in cars[i]){ */
/*       if(cars[i]['make']==='Ford') cars['price'] +=cars[i]['price'];
      if(cars[i][key]==='Land Rover') cars['price'] +=cars[i]['price'];
      if(cars[i][key]==='Toyota') cars['price'] +=cars[i]['price'];
      if(cars[i][key]==='Honda') cars['price'] +=cars[i]['price']; */
      var newObj={'Ford':0 , 'Land Rover':0 , 'Toyota':0, 'Honda':0};
      for(var i=0;i<cars.length;i++){
         for(var key in cars[i]){
             if(cars[i][key]=='Ford') newObj['Ford'] +=cars[i]['price']
             //.push(arr[i][key]) //arr[i][key]
             if(cars[i][key] =='Land Rover') newObj['Land Rover'] +=cars[i]['price']
             if(cars[i][key]=='Toyota') newObj['Toyota']+=cars[i]['price']
             if(cars[i][key] =='Honda') newObj['Honda']+=cars[i]['price']
         }
      }
return newObj;
}//lloc

// Harder challenges
function secondLargest(arr){
  // numbers is an array of numbers
  // return the index of the second 
  // largest number in the array

    /* var maxi = Math.max(...arr);
    arr2= arr.filter(i => i !== maxi);
    return arr2.indexOf(Math.max(...arr2)); */

   //smart way
   arrCopy=arr.slice();       //makes a copy of original array
    var secMax = arrCopy.sort((a, b)=>b - a)[1]
    return arr.indexOf(secMax); 
    
  }

//function factorial( n ) {
  // int is an integer
  // a factorial is the product of all non-negative integers
  // less than or equal to the iniital number.

  // for example the factorial of 5 is 120
  // 120 = 1 * 2 * 3 * 4 * 5

  // calculate and return the factorial of int
  // note: factorial of 0 is 1
  var factorial = int =>(int===0) ? 1 : int*factorial(int-1);
   /*  if (n === 0) {
      return 1;
    }
    // This is it! Recursion!!
    return n * factorial(n - 1); */
 // }

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
