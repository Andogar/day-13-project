// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// sports = ['soccer', 'baseball', 'football', 'swimming']
// total = 4


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
// A:

function longestString(array) {
  var valueLength = 0;
  var answer;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > valueLength) {
      valueLength = array[i].length;
      answer = array[i];
    }
  } return answer;
}

console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:

function smallestNumber(array) {
  var answer = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < answer) {
      answer = array[i];
    }
  } return answer;
}

console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:

function getEvens(array) {
  var answer = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      answer.push(array[i]);
    }
  } return answer;
}


console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:

function arrayReverser(array) {
  var answer = [];
  for (var i = Math.max(array.length-1, 0); i >= 0; i--) {
    answer.push(array[i]);
  } return answer;
}

console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:

function sumArrayOfNumbers(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total = total + array[i];
  } return total;
}

console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:

function numbersOver10(array) {
  var answer = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      answer.push(array[i]);
    }
  } return answer;
}

console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:

function numbersOverX(array, num) {
  var answer = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > num) {
      answer.push(array[i]);
    }
  } return answer;
}

console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:

function joinArrays(array) {
  var answer = [];
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++) {
      answer.push(array[i][j]);
    }
  } return answer;
}

/*
function joinArrays2(arrayOfArrays) {
  var answer = [];
  for (var i = 0; i < arrayOfArrays.length; i++) {
    answer.push(arrayOfArrays[i]);
  }
  answer = [].concat.apply([], answer);
  return answer;
}

This was the first way I found to do this but I figured you all wanted it in
a loop, so I worked on figuring out how to do that
*/

console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// instructorNameDiscipline = ['Will','JavaScript']

var instructorOne = instructors[4][0];
// instructorOne = 'Dan'

var instructorTwo = instructors[0][1];
// instructorTwo = 'JavaScript'

var instructorThree = instructors[2][0];
// instructorThree = 'Brit'
