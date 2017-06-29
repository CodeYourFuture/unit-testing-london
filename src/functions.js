const functions = {

  removeMiddle: function(words) {
    // var sliced = words.slice(2, 3);
    // words is an array of strings. Remove the middle word from the array and return it
    var middleIndex = Math.ceil(words.length / 2) - 1;
    return words.splice(middleIndex, 1);
  },

  get2ndAnd3rd: function(myArray) {
    // myArray is an array. Return an array containing 2nd and 3rd items from myArray
    // make sure myArray remains unchanged.
    return myArray.slice(1, 3);
  },

  mapper: function(myArray) {
    // return a new array which has same all items in myArray incremented by one
    // make sure myArray remains unchanges
    return myArray.map(function(item) {
            return item + 1;
        });
  },

  wordLengths: function(words) {
    // the parameter words is an array of words. Return a new array that contains
    // the number of letters in each word
    return words.map(function(word) {
            return word.length;
        });
  },

  largerThanTen: function(numbers) {
    // numbers is an array of numbers. return an array that contains all numbers
    // from the input array which are greater than 10
    return numbers.filter(function(number) {
            if (number > 10)
                return number;
        });
  },

  even: function(numbers) {
    // numbers is an array of numbers. return an array that contains all even numbers
    // from the input array
    // hint: you may want to use the modulus operator '%'
    return numbers.filter(function(number) {
            if (number % 2 === 0)
                return number;
        });
  },

  findTheNeedle: function(words) {
    // words is an array of words. Return the index of the word 'needle'
    return words.indexOf("needle");
  },

  findLargest: function(numbers) {
    // numbers is an array of numbers. return the largest number from that array
    let largestNumber = numbers[0];
        numbers.forEach(function(element) {
            if (element > largestNumber)
                largestNumber = element;
        });
        return largestNumber;
  },

  buildTrain: function(numberOfCarriages) {

    const Train = function(numberOfCarriages) {
      this.numberOfCarriages = numberOfCarriages;
    }

    // return a new instance of Train which has the specified number of carriages
    return new Train(numberOfCarriages);
  },

  addMethod: function(bookTable) {
        const restaurant = {
            freeTables: 7,
            // make bookTable is a function. make it a method of restaurant
            bookTable: function() {
                this.freeTables--;
                if (this.freeTables < 0) this.freeTables = 0;
            }
        };

        return restaurant;
  }
};

module.exports = functions;