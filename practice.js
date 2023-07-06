//////////////////PROBLEM 1////////////////////

//Create a function called capitalizer that takes in an array of strings and returns a new array (does not modify original array) with all strings capitalized.

const sentenceArr = ['hello', 'how', 'are', 'you'];

// Code Here

//////////////////PROBLEM 2////////////////////

// Create a function that loops over an array and returs a new array with every other value. Name the function everyOther

const secretMessage = [
  'dont',
  'always',
  'tell',
  'never',
  'anyone',
  'forget',
  'about',
  'to',
  'this',
  'remember',
  'array',
  'always',
];

//Code here

//////////////////PROBLEM 3////////////////////

//Create a function that loops over an array of objects and returns a new array of the value of the `name` key. Name the function nameExtractor.

const coolGuys = [
  { name: 'Bob Ross' },
  { name: 'Steve Irwin' },
  { name: 'Mr. Rogers' },
];

//Code here

//////////////////PROBLEM 4////////////////////

//This while loop is broken. Fix it so that it runs until i is no longer less than 10.

//Code here

function brokenWhileLoop(i) {
  while (i !== 10) {
    i = i + 1;
  }
  return i;
}

brokenWhileLoop(0);

//////////////////PROBLEM 5////////////////////

//Create a function called rePete that takes in a string and a number and returns a string that is the passed in string repeated that n times.

//Code here

//////////////////PROBLEM 6////////////////////

//rewrite the function below to use a ternary instead of an if/else block

//Code here
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//////////////////PROBLEM 7////////////////////

//rewrite the function below to use a single ternary instead of a nested one

//Code Here
function nestedTernary(num) {
  return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero';
}
