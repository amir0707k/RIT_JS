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

//1. parseInt() and parseFloat()

// let num1 = "12";
// let num2 = "32.5";


// console.log(parseInt(num1)  + parseFloat(num2))

//2. Math. toFixed(), ceil(), floor()

// var x = 23.78;
// var y = 23.33;

// var upperVal = Math.ceil(x)
// var lowerVal = Math.floor(y)

// console.log(upperVal)
// console.log(lowerVal)
// toFixed()
// var num = 234.3434334535
// var fixedVal = num.toFixed(2);
// console.log(fixedVal)

// Taking input from user
// prompt

// var val = prompt("Enter a number");
// console.log(val)

// console.log(parseInt("asd"))

// alert("This is alertbox")

// readline

// Temporal DeadZone (TDZ)
// console.log(x);
// .
// .
// .
// .
// .
// .
// .
// .

// let x = 24;
// Hoisting example
// let y = 10;
// function foo() {
//     let y = 20;
//   console.log(y);
// }
// foo();


// Conditionals

// if statement