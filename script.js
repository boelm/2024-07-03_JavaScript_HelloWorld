console.log("//Exercise 0//");
console.log("Hej");
let yourName = "Boel";
let age = 99;
console.log(`Hej ${yourName}!`);
// A console.log can take multiple values inside the parentheses, just comma-seperate them
console.log(yourName, age);

console.log("//Exercise 1//");
// 1. Declare a variable age and assign your age to it. Write it out in the console together with a description of the age. Like, "this is my age...".
age = 5;
console.log(`This is my neighbour´s age. He is`, age, `years old.`);

console.log("//Exercise 2//");
//2. Declare three variables using the three different keywords that we have learned. Write them all out in the console. What was the different between these keywords?
var aVar = 5;
let aLet = 5;
const aConst = 5;
console.log(aVar,aLet,aConst);

console.log("//Exercise 3//");
//3. Declare three different variables, one of each data type. Assign them values and log them to the console in three different logs.//
let aString = "hej";
let aNumber = 5;
let aBoolean = true;
console.log(aString);
console.log(aNumber);
console.log(aBoolean);

console.log("//Exercise 4//");
//4. Create a const variabel called name and assign a value to it. Log it to the console. On a new line, try to reassign the value. Log that to the console. Does it work? If it doesn't, think about why that is. How would you correct it?//
const name = "Const";
console.log(name);
// name = "New";
///TypeError: Assignment to constant variable./
console.log(name);

console.log("//Exercise 5//");
//5. Think about one case when we would like to use a boolean value. Discuss it with another person.
let person1 = "Rubber Duck #1";
let person2 = "Rubber Duck #2";
console.log(person1,": When would we use a boolean value?");
console.log(person2,": A boolean could be used as a flag. One process could set it to true and then another process could read this value and depending on if the flag is true or false the other process would either start or not start.");

console.log("//Exercise 6//");
console.log(person1,": 6. If we create a variable that we know is not going to change its value during the duration of our program, should we declare it using let or const and why?");
console.log(person2,": We should declare it using");
console.log('%cconst', 'color: red');
// console.time();
// setTimeout(console.timeEnd(),2000);
// console.timeEnd();

console.log("//Exercise 7//");
console.log(person1,": 7.Create two numbers, save them in the variables number1 and number2. Add these two variabels together and save the result in a new variable that you log to the console.");
let nbr1 = 1;
let nbr2 = 2;
let result = nbr1+nbr2;
console.log(person2, "says:");
console.log(`%cI added ${nbr1} and ${nbr2} and the result is ${result}.`,'color: orange');

console.log("//Exercise 8//");
console.log(`%c${person1} says:`,'color:blue');
console.log("Now subtracte, multiply and divide thoose numbers.");
result = nbr1-nbr2;
console.log(`%cI subtracted ${nbr1} and ${nbr2} and the result is ${result}.`,'color: orange');
result = nbr1*nbr2;
console.log(`%cI multiplied ${nbr1} and ${nbr2} and the result is ${result}.`,'color: orange');
result = nbr1/nbr2;
console.log(`%cI divided ${nbr1} and ${nbr2} and the result is ${result}.`,'color: orange');

console.log("//Exercise 9//");
console.log("//Exercise 10//");
console.log("//Exercise 11//");
