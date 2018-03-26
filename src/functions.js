
function removeMiddle( words ){
  var remove =  words.splice( 2, 1)
  return remove
  
  // words is an array which contains an odd number of strings
  // return a new array containing only the middle word
  // the words array should no longer contain the middle word
  // hint: splice
}

function get2ndAnd3rd( myArray ){
  var get = myArray.slice(1, 3)
  return get
     // myArray is an array of numbers
     // return an array containing the 2nd and 3rd items from myArray
     // myArray should remain unchanged
     // hint: slice
   }
 
function mapper( myArray ){
  var arr = myArray.map(x => x +1)
  return arr

  // myArray is an array of numbers
  // return a new array which has all items in myArray incremented by one
  // myArray should remain unchanged
  // hint: map

}

function wordLengths( words ){
  var newarr =[]
  for(var i=0;i<words.length ;i++){
       
      newarr.push(words[i].length);
  }
      return newarr
        }


////////////////////////////

//             var arr = words.map(x => x.lenght )
//  return arr

//  nawal way       for (i=0;i<words.length; i++) {
//     words[i]=words[i].length
//   }
  
// return words
       // words is an array of strings
  // return a new array that contains the number of letters in each word
  // hint: strings have a 'length' property


function cities( capitals, formatter ){

  var cap=[]
  for (var i = 0; i < capitals.length; i++)
  cap.push(capitals[i].city + " is the capital of " + capitals[i].country)
  return cap
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



function largerThanTen( numbers ){
      
     var arr = numbers.filter(x => x >10 )
      return arr

  // numbers is an array of numbers
  // return a new array that contains only numbers from the input array which are greater than 10
  // hint: filter
}

function even( numbers ){
  // my way
  // var arr = numbers.filter(x => x % 2 ===0)
  // return arr 
// another way
  var arr = []
  for (var i=0;i<numbers.length;i++)
       if (numbers[i] % 2 === 0){
         arr.push(numbers[i])
       }
       return arr

  // numbers is an array of numbers
  // return a new array that contains only even numbers from the input array
  // hint: you may want to use the modulus operator '%'
}
function findTheNeedle( words ){
  for (var i = 0; i < words.length; i++)
  if (words[i]=== 'needle'){
      typeOf= i


  }
   return typeOf
  // words is an array of words
  // return the index of the word 'needle'
  // hint: indexOf
}


function findLargest( numbers ){

// my answer
//   return Math.max.apply(null,numbers)   
// var max =0
// for (var i=0;i<numbers.length;i++)
// if (numbers[i]>max){
//   max = numbers[i]
// }
//    return max


// }
// another way 

return Math.max.apply(null, numbers)

}

function addAllnumbers( numbers ) {

  var sum = numbers.reduce((a,b)  =>a +b)

    return sum
  
  
  }
  // numbers is an array of numbers
  // return the sum of all the numbers in the array


function average( numbers ) {
  arr = []
  for( i=0; i<=numbers.length; i++){  
    if (typeof numbers[i] === 'number') {
      arr.push(numbers[i])
   }
    //  for (var i=0;i<numbers.length;i++)
  }
  // console.log("how are you \n\n\narr: "+arr)

  var sum = arr.reduce((a,b) => a+b)  
  var ave = sum / arr.length  
  return ave
  
    // things is an array of numbers and strings
    // return the average of all the numbers
    // be sure to exclude the strings
}

function paintShop( cars, colour ){
  var copy = []
  for (var i=0;i<cars.length;i++){
  copy.push(Object.assign({},cars[i]));
    if (copy[i].make ==='Ford')
      copy[i].colour = colour;

    }
  
    
  
return copy


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

  // cars.forEech(function,num){

  // }
        // var arr ={};  
        // for (var i=0;i<carsSold.length;i++){
        //    if (arr[carsSold[i].make]=== arr[carsSold[i].make] || 0){
        //      arr[carsSold[i].make] += carsSold[i].price;

        //    }
        //   }
        //     return  arr


  const Count = {};

  cars.forEach(car => {
    if(!Count[car.make]){
      Count[car.make] = 0;
    }
    Count[car.make]+= car.price;
  });

  return Count
    
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

  // var mx = Math.max.apply(null, numbers);
  // numbers.splice(numbers.indexOf(mxx), 1); // remove max from the array
  // return Math.max.apply(null, numbers);
  var max = 0;
	var sec = 0;
	
	for(var i=0; i<numbers.length; i++){
		if(max < numbers[i]){
			sec = max;
			max = numbers[i];			
      if (numbers[i] > max) {
        sec = max;
       max = numbers[i];
      };
    };
  }
   return numbers.indexOf(sec);



   // numbers is an array of numbers
  // return the index of the second 
  // largest number in the array
}

function factorial( int ) {

  if (int === 0) {
    return 1;
  }
  
  return int * factorial(int - 1);
}
  // int is an integer
  // a factorial is the product of all non-negative integers
  //§ less than or equal to the iniital number.

  // for example the factorial of 5 is 120
  // 120 = 1 * 2 * 3 * 4 * 5

  // calculate and return the factorial of int
  // note: factorial of 0 is 1


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
