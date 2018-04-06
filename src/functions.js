function removeMiddle( words ){
  
  return words.splice(words.length/2, 1);
  }
  
  function get2ndAnd3rd( myArray ){
  
  return myArray.slice(1,3);
  }
  
  function mapper( myArray ){
 
  var newArray= myArray.map(function(i){
  return i+= 1;
  });
  return newArray
  }

  function makeUppercase(letters) {
   
    var capitalLetters= letters.map(function(letter){
return letter.toUpperCase() 
    });
    return capitalLetters
  }

  
  function wordLengths( words ){

 
   for (i = 0; i < words.length; i++) {
  words[i] = words[i].length;
  };
  return words;
  }

function cities( capitals, formatter ){
  for (i=0; i<capitals.length; i++){
 capitals[i] = formatter(capitals[i]);
};
  
   return capitals;

}

function largerThanTen( numbers ){
  // numbers is an array of numbers
  // return a new array that contains only numbers from the input array which are greater than 10
  // hint: filter
  var filteredArr = numbers.filter(function(num){
    return num>10;

  
});
return filteredArr

}
function even( numbers ){
  let evenNum = [];
  for(var i=0; i<=numbers.length; i++)
  if (numbers[i] % 2 == 0) {
    evenNum.push(numbers[i]);
  } else { continue }
  return evenNum;
};

function findTheNeedle( words ){
  return words.indexOf("needle");

}

function findLargest( numbers ){

  return Math.max(...numbers)
}

function addAllnumbers( numbers ) {
  // numbers is an array of numbers
  // return the sum of all the numbers in the array
}

function average( things ) {
  var total= 0;
  var avgTotal = 0;
 for (var i=0; i< things.length; i++){
 if(typeof things[i] === "number"){
  total = total + things[i]
  
    
 }

return total/ things.length *10;
   
 }

    
    return avgTotal;
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
  
  var newArr =[];
  for (i=0; i<cars.length; i++){

    paintedcars = Object.assign({}, cars[i]);
    if (paintedcars.make == 'Ford'){

       paintedcars.colour = colour


    }
    newArr.push(paintedcars)
    }
    return newArr
}

function sales( cars ){
  // cars is an array of objects that have been sold
  // their properties are `make`, `model`, `colour` and `price`
let soldCars= {"Ford":0,"Toyota": 0,"Land Rover": 0, "Honda":0,};
  for(var i=0; i<=cars.length;i++ ){
    for(var keys in cars){
      if (cars[i][key] === 'Ford') soldCars['Ford'] += cars[i]['price']
      if (cars[i][key] === 'Land Rover') soldCars['Land Rover'] += cars[i]['price']
      if (cars[i][key] === 'Toyota') soldCars['Toyota'] += cars[i]['price']
      if (cars[i][key] === 'Honda') soldCars['Honda'] += cars[i]['price']

    }


  }
  return soldCars;

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
  //addAllnumbers,
  average,
  paintShop,
  //sales,
 // secondLargest,
  //factorial,
  makeUppercase
};
