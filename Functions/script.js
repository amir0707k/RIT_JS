// Conditionals
// if, if else, if else if statement
// Logical AND operator (&&)
// Logical OR operator (||)

// const a = 58

// if(a >= 18 && a<58 && a === 58){
//     console.log("You are eligible to vote");
// }else if( a<58 || a === 58  ){
//     console.log("You are a senior citizen");
// }else{
//     console.log("You are not eligible to vote");
// }

// Ternary Operator (? "" : "")

// let newName = "Abcd";
// let haveName = false;

// haveName ? console.log(newName) : console.log("No name available")
// //                true   :   false
// // condition ? statement : statement2

// Switch case
// let day = 1

// switch(day){
//     case 1:
//         console.log("Day is monday")
//         break;
//     case 2:
//         console.log("Day is tuesday")
//         break;
//     case 3:
//         console.log("Day is wednesday")
//         break;
//     default:
//         console.log("No day was defined")
//         break;
// }

// nested if
// const x = 12

// if(x){
//     if(x > 10){
//         console.log("X is greater than 10");
//     }
// }

// Nullish collescing Operator (??)

// let user = null;

// user = user ?? "User";

// console.log(`Hi ${user}. I am Siri`)

// Functions

// function abc(){
//     console.log("Hi I am Aamir")
// }

// abc();
// abc();
// abc();

// Functions with params
// function printName(user){
//     console.log(`Hi ${user}. How are you ?`);
// }

// printName("Ankush");
// printName("Prashant");
// printName("Shivam");
// printName("ACBC");
// printName("asdad");

// function with return value
// function sum(a,b){
//     // console.log(a+b);
//     return a+b
// }

// const x = sum(1,2)
// console.log(x);
// sum(1,2);
// sum(3,4);
// sum(5,6)

// const printName = () => {
//     console.log("Hi Ankush. How are you");
// }

// printName()

// const printDynamicName = (user) => {
//     console.log(`Hi ${user}. How are you ?`)
// }

// printDynamicName('Prashant');
// printDynamicName('Shivam');
// printDynamicName('Ankush');

// const sum = (a,b) => {
//     console.log(a+b)
// }

// sum(1,2);
// sum(1,3);
// sum(1,4);

// const printData = (user) => {
//     const greeting = `Hi ${user}. How are you ?`
//     return greeting;
// }

// console.log(printData('Shivam'));
// console.log(printData('Ankush'));
// console.log(printData('Prashant'));

// function functionName(user){
//     console.log(`Hi ${user}, how are you? I am fine`)
// }

// function sum(a){
//     return a+20;
// }

// let initialDistance = 10;

// let totalDistance = sum(initialDistance);
// let totalDistForShivam = sum(30);

// console.log(totalDistance);
// console.log(totalDistForShivam)

// Functions with default parameters

// function funWithDefaultVal(user){
//     console.log(`Hi ${user}. I am siri.`);
// }
// funWithDefaultVal()
// funWithDefaultVal('Ankush')

// function sum(a = 0, b = 0){
//     console.log("The sum of given numbers is: ", a+b)
// }

// sum()
// sum(2,5)

// default return value of a function

// function greet(){
//     console.log("hi user how are you")
//     return true;
// }

// let greeted = greet();
// console.log(greeted)

// Arrow functions
// const functionName = () => {
//     console.log("Hi user how are you")
// }

// functionName();

// Default value with arrow functions
// const printUser = (user = "User") => {
//     console.log(`Hi Your name is ${user}`)
// }

// printUser()

// Arrow function with return value
// const arrowWithReturn = (a,b) => {
//     return a+b;
// }

// console.log(arrowWithReturn(1,2))

// Anonymous functions
// let sum = function(a,b){
//     return a+b;
// }

// console.log("the sum for the given value is:",sum(1,2))

// Higher Order functions

// function greetAndSum(user){
//     console.log(`Hi ${user}. How are you`)

//     function sum(a,b){
//         console.log(a+b);
//     }

//     return sum;
// }

// let total = greetAndSum("Rajnish")
// // total = sum
// total(2,3) // sum(2,3)

// Higher Order Functions
// function hOF(printUser, user){
//     printUser(user)
// }

// function printUser(user){
//     console.log(`Hi ${user}. I am Siri`)
// }

// hOF(printUser, "Shivam")

// Recursive functions

function recursiveSum(n) {
  if (n === 1) {
    return 1;
  }

  return n + recursiveSum(n - 1);
}
// first Iteration  when n === 5 , 5+4+3+2+1 = =15
// Iteration  when n === 4 , 5+4
// Iteration  when n === 3 , 5+4+3
// Iteration  when n === 2 , 5

let total = recursiveSum(5);
console.log(total);
