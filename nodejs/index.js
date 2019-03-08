var sleep = require('sleep');

functionName()

function randomIntInc(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low)
  }

function functionName() {
    console.log("Hello World");
    var randomeNumber1 = randomIntInc(0,10)
    var randomeNumber2 = randomIntInc(0,10)
    var totalNumber = randomeNumber1 + randomeNumber2;
    console.log("Doing " + randomeNumber1 + " + " + randomeNumber2 + " = " + totalNumber);
    console.log("Good Bye");
}