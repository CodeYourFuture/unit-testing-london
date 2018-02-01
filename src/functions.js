function removeMiddle( words ){
  var midWord = Math.floor(words.length / 2);
  return words.splice(midWord, 1);

}

function get2ndAnd3rd( myArray ){
  let newArr = myArray.slice(1, 3);
  return newArr;
}

function mapper( myArray ){
  const newArr = myArray.map(x => x + 1);
  return newArr;
}

function wordLengths( words ){
  let numArray = [];
  words.forEach(x => {
    numArray.push(x.length);
  })
  return numArray;
}

function cities( capitalArr, formatter ){
  let citiesArr = [];

  capitalArr.forEach(x => {
    let phrase = formatter(x);
    citiesArr.push(phrase);
  })

  return citiesArr;
}

function largerThanTen( numbers ){
  let newArr = numbers.filter(num => num > 10);

  return newArr;
}

function even( numbers ){
  let newArr = [];

  numbers.forEach(num => {
    if(num % 2 === 0) {
      newArr.push(num);
    }
  })

  return newArr;
}

function findTheNeedle( words ){
  // words is an array of words
  // return the index of the word 'needle'
  // hint: indexOf
  let wordIndex = words.indexOf("needle");

  return wordIndex;
}

function findLargest( numbers ){
  // numbers is an array of numbers
  // return the largest number from that array
  let maxNum = -Infinity;
  numbers.forEach(num => {
    if (num > maxNum) {
      maxNum = num;
    }
  })
  return maxNum;
}

function addAllnumbers( numbers ) {
  // numbers is an array of numbers
  // return the sum of all the numbers in the array
  let arrSum = 0;
  numbers.forEach(num => {
    arrSum += num;
  })

  return arrSum;
}

function average( things ) {
  // things is an array of numbers and strings
  // return the average of all the numbers
  // be sure to exclude the strings
  let arrNums = [];
  let arrSum = 0;

  things.forEach(thing => {
    if (typeof thing === "number") {
      arrNums.push(thing);
    }
  })

  arrNums.forEach(num => {
    arrSum += num;
  })

  return (arrSum / arrNums.length);
}

function paintShop( cars, colour ){
  let carsClone = [];

  cars.forEach(car => {
    carsClone.push(Object.assign({}, car));
  })

  carsClone.forEach(car => {
    if (car.make === "Ford") {
      car.colour = colour;
    }
  })

  return carsClone;
}

function sales( cars ){
  let carSales = {};

  cars.forEach(car => {

    if(carSales.hasOwnProperty(car.make)) {
      carSales[car.make] += car.price;
    } else {
      carSales[car.make] = car.price;
    }
  })

  return carSales;
}

// Harder challenges
function secondLargest( arr ){
  let   largest     = -Infinity,
  largestIndex      = 0,
  nextLargest       = -Infinity,
  nextLargestIndex  = 0;

  for (var i = 0, n = arr.length; i < n; ++i) {
    var nr = arr[i];                              // convert to number first

    if (nr > largest) {
      nextLargest = largest;                   // save previous largest value
      nextLargestIndex = largestIndex;
      largest = nr;
      largestIndex = i;
    } else if (nr < largest && nr > nextLargest) {
      nextLargest = nr;                        // new second largest value
      nextLargestIndex = i;
    }
  }
  // console.log(nextLargestIndex);
  return nextLargestIndex;
}

function factorial( int ) {
  let fact = 1;
  for (var i = 1; i < int + 1; i++) {
    fact = fact * i;
  }
  return fact;
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
