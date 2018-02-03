function removeMiddle(words) {
  newWord = words.splice(2, 1);
  return newWord;
}

function get2ndAnd3rd(myArray) {
  newArray = myArray.slice(1, 3);
  return newArray;
}

function mapper(myArray) {
  var newArray = myArray.map(function (i) {
    return i + 1;
  });
  return newArray;
}

function wordLengths(words) {
  var newArr = [];
  for (i = 0; i < words.length; i++) {
    newArr[i] = words[i].length;
  };
  return newArr;
}

function cities(capitals, formatter) {
  var newArr = [];
  for (i = 0; i < capitals.length; i++) {
    newArr[i] = formatter(capitals[i]);
  };
  return newArr;
}

function largerThanTen(numbers) {
  var newArr = numbers.filter(function (item) {
    return item > 10;
  });
  return newArr;
}

function even(numbers) {
  var newArr = [];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArr.push(numbers[i]);
    } else { continue }
  };
  return newArr;
}

function findTheNeedle(words) {
  var index = words.indexOf('needle');
  return index;
}

function findLargest(numbers) {
  var num = numbers
  for (i = 0; i < num.length; i++) {
    if (num[i] > num[
      0]) {
      num[0] = num[i];
    };
  };
  return num[0];
}

function addAllnumbers(numbers) {
  var result = numbers.reduce(function (sum, curent) {
    return sum + curent;
  });
  return result;
}

function average(things) {
  sum = 0;
  num = 0;
  for (i = 0; i < things.length; i++) {
    if (typeof (things[i]) === 'number') {
      sum = sum + things[i];
      num = num + 1;
    };
  };
  return sum / num
}

function paintShop(cars, colour) {
  var copy = [];
  for (i = 0; i < cars.length; i++) {
    copy[i] = Object.assign({}, cars[i]);
    if (copy[i].make === 'Ford') {
      copy[i].colour = colour;
    };
  };
  return copy;
}

function sales(cars) {

  // var newObj = { 'Ford': 0, 'Land Rover': 0, 'Toyota': 0, 'Honda': 0 };
  // for (var i = 0; i < cars.length; i++) {
  //   for (var key in cars[i]) {
  //     if (cars[i][key] === 'Ford') newObj['Ford'] += cars[i]['price']
  //     if (cars[i][key] === 'Land Rover') newObj['Land Rover'] += cars[i]['price']
  //     if (cars[i][key] === 'Toyota') newObj['Toyota'] += cars[i]['price']
  //     if (cars[i][key] === 'Honda') newObj['Honda'] += cars[i]['price']
  //   }
  // }
  // return newObj;

  var sale = {};
  for (i = 0; i < cars.length; i++) {
    if (sale[cars[i].make] === undefined) {
      sale[cars[i].make] = cars[i].price;
    } else {
    sale[cars[i].make] = cars[i].price + sale[cars[i].make];
    };
  };
  return sale;
}

// Harder challenges
function secondLargest(numbers) {
  var max = 0;
  var secMax = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      secMax = max;
      max = numbers[i];
    };
  };
  return numbers.indexOf(secMax);
}

function factorial(int) {
  var result = 1;
  while (int) {
    result *= int--;
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