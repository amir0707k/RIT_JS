// // variable and data types
// // diff. ways to output
// // arithmatic operators
// // hoisting 
// // scopes
// // functions
// // var, let and const

// // String

// // "", ''
// // 1.String Concatenation:

// // console.log("Linked")
// // let firstName = "A";
// // let lastName = "B";

// // console.log("This is the full name" + firstName + lastName);
// // 1.String Concatenation:
// let firstName = "A";
// let lastName = "B";

// console.log("This is the full name"+ " "+firstName+ " "+ lastName);

// //2. Template Literals `` backticks:
// console.log(`This is the full name ${firstName} ${lastName}`)

// //3. Boolean expressions:

// let a = 10
// let b = 5
// console.log(a>b);
// console.log(a<b);

// // 4. Array:
// let arr = [1,2,3,4];
// console.log(arr)

// Data Types:
// Primitive Data Types: 
// String -> done, Number -> done, Boolean -> done, Undefined -> done, Null -> done, Symbol, BigInt -> done
// Non Primitive Data Types:
// Object, Array, functions

// Date Object
// Null Data type
// let myName = null;


// console.log(myName);

// if(myName===null){
//     myName = "Amir";
// }else{
//     console.log("do nothing")
// }

// console.log(myName)

// Undefined

// let myName ;

// console.log(myName)

// BigInt data type:

// let num = 324324424424353534536353545353453535343453n;
// console.log(num)

// Non Primitive Data type: Object
// let obj = {
//     name:"Amir",
//     Age:24,
//     isWorking: true,
//     location: "RIT",
//     arr:[1,2,3,4,5]
// }
// console.log(obj)
// console.log(obj.Age);

// Functions:
// function abc(){
//     console.log("This function has been executed!");
// }

// abc()

// Date object
// let currentDate = new Date();
// console.log(currentDate);


// Arithmatic Operators:


// keyword       scope          hoisting     reassignment
// var           functional     allowed          yes
// let           block          not allowed        yes
// const         block          not allowed         no

// scope : refers to the accessibility of a function, variable

// functional, block

// let y = 20;
// y = 5
// function abc(){
//     if(true){
//         var x = 10;
//         x=3
//     }
//     console.log(x,y)
// }
// console.log(y)
// abc()

// Sample Question
// function outer(){
//     const x = 10;
//     if(true){
//         var y = 20;
//         console.log(x+y)
//     }
//     console.log(x);
//     console.log(y)
// }

// outer();

// Hoisting - Behaviour of the JS in which declaration of variables, function are moved to the top of scope



//  function outer(){
//         const x = 10;
//         if(true){
//             var y = 20;
//             console.log(x+y)
//         }
//         console.log(x);
//         console.log(y)
//     }

console.log(newName);
const newName = "Hello";
console.log(newName);

/////////////////////////

// var newName;
// console.log(newName);
// newName = "Hello";
// console.log(newName);
