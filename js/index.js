//Tesk-1
/*
var x = Number(window.prompt("enter number"));
console.log(x)
*/

//Tesk-2
/*
var x = Number(window.prompt("enter number"));
if(x % 3 == 0 && x % 4 == 0) {
    console.log("yes")
}else{
    console.log("no")
}
*/

//Task-3
/*
var x = Number(window.prompt("enter number"));
var y = Number(window.prompt("enter number"));

if(x > y) {
console.log(x)
}else if(y > x) {
    console.log(y);
}else {
    console.log("Both numbers are equal");  
}
*/

//Task 4
/*
var x = Number(window.prompt("enter number"));
if(x < 0) {
    console.log("Negative");
}else {
     console.log("Positive");
}
*/

//Task 5
/*
var x = Number(window.prompt("enter number"));
var y = Number(window.prompt("enter number"));
var z = Number(window.prompt("enter number"));

if (x >= y && x >= z) {
  console.log(`max element = ${x}`);
} else if (y >= x && y >= z) {
  console.log(`max element = ${y}`);
} else{
  console.log(`max element = ${z}`);
}
if (x <= y && x <= z) {
  console.log(`min element = ${x}`);
} else if (y <= x && y <= z) {
  console.log(`min element = ${y}`)
}else{
    console.log(`min element = ${z}`);
}
*/

//Task 6
/*
var x = Number(window.prompt("enter number"));
if (x % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}
*/

//Task 7
/*
var x = window.prompt("enter letter").toLowerCase();
if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
  console.log("Vowel");
} else {
  console.log("Consonant");
}
*/

//Task 8
/*
var x = Number(prompt("enter number"));
for (var i = 1; i <= x; i++) {
  console.log(i);
}
*/

//Task 9
/*
var x = Number(prompt("enter number"));
for (var i = 1; i <= 12; i++) {
  console.log(i * x);
}
*/

// Task 10
/*
var x = Number(prompt("enter number"));
for (var i = 1; i <= x; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
*/

// Task 11
/*
var x = Number(prompt("enter number"));
var y = Number(prompt("enter number"));
console.log(x**y);
*/

// Task 12
/*
var total = 0;
for (var i = 0; i <= 4; i++) {
  total += Number(prompt("enter number"));
}
console.log("Total marks:" + total); 
var average = total / 5;
console.log("average" + average);
var percentage = (total / 500) * 100; 
console.log("percentage" + percentage + "%");
*/

// Task 13
/*
var x = Number(prompt("enter number"));
if (
  x === 1 ||
  x === 3 ||
  x === 5 ||
  x === 7 ||
  x === 8 ||
  x === 10 ||
  x === 12
) {
  console.log("Days in Month: 31");
} else if (x === 4 || x === 6 || x === 9 || x === 11) {
  console.log("Days in Month: 30");
} else if (x === 2) {
  console.log("Days in Month: 29");
} else {
  console.log("Invalid month number!");
}
*/

// Task 14
/*
var total = 0;
for (var i = 1; i <= 5; i++) {
  total += Number(prompt("Enter marks for subject"));
}
var percentage = (total / 500) * 100;
if (percentage >= 90) {
  console.log("A");
} else if (percentage >= 80) {
  console.log("B");
} else if (percentage >= 70) {
  console.log("C");
} else if (percentage >= 60) {
  console.log("D");
} else if (percentage >= 40) {
  console.log("E");
} else if (percentage < 40) {
  console.log("F");
}
console.log("Total marks: " + total);
console.log("Percentage: " + percentage + "%");
*/

// Task 15
/*
var x = Number(prompt("enter number"));
switch (x) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Days in Month: 31");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Days in Month: 30");
    break;
  case 2:
    console.log("Days in Month: 29");
    break;
  default:
    console.log("Invalid month number!");
}
*/

// Task 16
/*
var x = prompt("Enter Letter").toLowerCase();
switch (x) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}
*/

// Task 17
/*
var num;
var x = Number(prompt("Enter Number"));
var y = Number(prompt("Enter Number"));
if (x > y) {
  num = "x";
}
switch (num) {
  case "x":
    console.log(x);
    break;
  default:
    console.log(y);
}
*/

// Task 18
/*
var x = Number(prompt("Enter Number"));
var num;
if (x % 2 === 0) {
  num = "even";
}
switch (num) {
  case "even":
    console.log("even");
    break;
  default:
    console.log("odd");
}
*/
// Task 19
/*
var x = Number(prompt("Enter Number"));
var num;
if (x > 0) {
  num = 1;
} else if (x < 0) {
  num = 0;
}
switch (num) {
  case 1:
    console.log("Positive");
    break;
  case 0:
    console.log("negative");
    break;
  default:
    console.log("The number is zero");
}
*/

// Task 20
/*
var num1 = Number(prompt("Enter Number 1"));
var op = prompt("Enter the calculation");
var num2 = Number(prompt("Enter Number 2"));
var result;
switch (op) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num1 / num2;
    break;
  default:
    console.log("Error: Unknown process.");
}
console.log(result)
*/
