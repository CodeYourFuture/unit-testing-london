function removeMiddle(words) {
    // words is an array which contains an odd number of strings
    // return a new array containing only the middle word
    // the words array should no longer contain the middle word
    // hint: splice

    // return words.splice(Math.ceil((words.length - 1) / 2), 1);                           another method
    // return words.splice(Math.floor(words.length / 2), 1);
    return words.splice(Math.trunc(words.length / 2), 1);
}

function get2ndAnd3rd(myArray) {
    // myArray is an array of numbers
    // return an array containing the 2nd and 3rd items from myArray
    // myArray should remain unchanged
    // hint: slice

    return newArr = myArray.slice(1, 3);
}

function mapper(myArray) {
    // myArray is an array of numbers
    // return a new array which has all items in myArray incremented by one
    // myArray should remain unchanged
    // hint: map

    return myArray.map(function(num) {
        return num + 1;
    });

}

function wordLengths(words) {
    // words is an array of strings
    // return a new array that contains the number of letters in each word
    // hint: strings have a 'length' property

    /* var leng = [];
        words.forEach(function(word){
          leng.push(word.length);
        })
        return leng;                           another method with loop                           */
    return words.map(function(word) {
        return word.length
    });
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

    return capitals.map(function formatter(item) {
        return (item.city + ' is the capital of ' + item.country);
    });
}


function largerThanTen(numbers) {
    // numbers is an array of numbers
    // return a new array that contains only numbers from the input array which are greater than 10
    // hint: filter

    return numbers.filter(function(number) {
        return number > 10;
    });
}

function even(numbers) {
    // numbers is an array of numbers
    // return a new array that contains only even numbers from the input array
    // hint: you may want to use the modulus operator '%'

    return numbers.filter(function(item) {
        return item % 2 === 0;
    });
}

function findTheNeedle(words) {
    // words is an array of words
    // return the index of the word 'needle'
    // hint: indexOf

    return words.indexOf('needle');
}

function findLargest(numbers) {
    // numbers is an array of numbers
    // return the largest number from that array

    // var sorted = numbers.sort(function(a, b) { return a - b });  another method
    // return sorted.pop();

    return Math.max(...numbers);
}

function addAllnumbers(numbers) {
    // numbers is an array of numbers
    // return the sum of all the numbers in the array

    return numbers.reduce(function(a, b) {
        return a + b;
    });
}

function average(things) {
    // things is an array of numbers and strings
    // return the average of all the numbers
    // be sure to exclude the strings

    //var nonStr = [];                                          1st method
    //  var y = things.filter(function(item){
    //    if(typeof item !== 'string'){
    //        return item;
    //      }
    //    }
    //  );
    //  var output = y.reduce(function(a, b){
    //    return (a + b);
    //  });
    //  return output  / y.length;
    //                                                                another method
    var thingsNumbers = things.filter(function(item) {
        return typeof item !== 'string';
    });
    return thingsNumbers.reduce(function(a, b) {
        return (a + b);
    }) / thingsNumbers.length;
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

    var tempCars = [];
    cars.map(function(item) {
        tempCars.push(Object.assign({}, item));
    });
    tempCars.map(function(items) {
        items.colour = colour;
    })
    return tempCars;
}

function sales(cars) {
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

    var resultOfSale = {};
    cars.forEach(function(item) {
        resultOfSale[item.make] = resultOfSale[item.make] || 0;
        resultOfSale[item.make] += item.price;
    });
    return resultOfSale;
}

// Harder challenges
function secondLargest(numbers) {
    // numbers is an array of numbers
    // return the index of the second 
    // largest number in the array

    var firstMax = Math.max(...numbers);
    numbers.splice(numbers.indexOf(firstMax), 1);
    var secondMax = Math.max(...numbers);
    return numbers.indexOf(secondMax);
}

function factorial(int) {
    // int is an integer
    // a factorial is the product of all non-negative integers
    // less than or equal to the iniital number.

    // for example the factorial of 5 is 120
    // 120 = 1 * 2 * 3 * 4 * 5

    // calculate and return the factorial of int
    // note: factorial of 0 is 1

    if (int < 0) {
        return -1;
    } else if (int === 0 || int === 1) {
        return 1;
    } else {
        for (var i = int - 1; i >= 1; i--) {
            int *= i;
        }
    }
    return int;
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