//  intervie asked  problems

// // function hoisting
// // acces to function before we intiailize it

// document.write(add(3,2));

// function add(a,b){
//    a= a+b;   //5
//     return a ;
// }

// closure an i mportant topic in js when a funcitn is creaddte it has acces to a refernce  to all th variables declared around it , also knwn as lexical environmment,,,,  have acces to variables everywhere

//closure is an inner functi on that has  accces to the outer  (enclosing )  functions variable  - scope chains its own scope chain the closure has threesccope chains >> its own scope  >> the outer function variables >> global variables  //

// function crt() {
//   let val = 1;

//   function inc() {
//     val++;
//   }
//   inc();
//   return val;
// }
// document.write(crt()); //op  2

//  and

// function creatad(a) {
//   function f(b) {
//     const sum = a + b;
//     return sum;
//   }
//   return f;
// }

// const f = creatad(3);
// document.write("<h1>",f(4)); //  op 7

// // anonymus function
// let f = function(a,b){

//     document.write(a+b); // op 3
//     document.wd]rite(a,b) // op 1  2

// }
// f(1,2);

// function crtcntr() {
//   let val = 0;

//   function incrmt() {
//     return ++val;
//   }
//   return {
//     incrmt: incrmt,
//   };
// }

// const cnt1 = crtcntr();
// const cnt2 = crtcntr();

// document.write("<h1>", cnt1.incrmt()); //  op 1
// document.write("<h1>", cnt1.incrmt()); //  op 2
// document.write("<h1>", cnt2.incrmt()); //  op 1

// can create function like this
//

// let a=[1,3];

// let b=[4,5];

// document.write([...a,...b])// op 1,3,4,5  //spread oprator

// function add(...args){
//     document.write(args[0]+args[1]);
// }
// add(...b); //  4 + 5 op 9;
// add(1,2); //  op 3;

// let q= (a,b)=>a+b;
// document.write(q(1,2)); // op  '3

// function log(inpfun){
//     return function(...args){
//         document.write("ip", args);
//         const result = inpfun(...args);
//         document.write('op', result)
//         return result;

//     }
// }
// const f= log((a,b)=> a+b);
// f(1,2);// logs op >>> ip 1, 2 op 3

// n   return fun n and  counter it link n+1 n+2....

// even we dont  use let or const it shows shuch otput nad we can acces a variable
//  a = 1;
// b = 2;
// document.write(a + b);  // op 3

// increment oprator working  ++b firt increment then print ,b++ firt pirnt then incremenet;
// function j(a, b) {
//   a = b++; /// 9
//   // a= ++b;  //op 10

//   return a;
//   // return a, // the a is not printed here the value after the comma is pinrted
// }
// document.write(j(1, 9));

//

//

//
//
//

// function divideBy2(sum){
//   console.log(Math.floor(sum / 2));
// }

// function multiplyBy2(sum){
//   console.log(sum * 2);
// }

// function operationOnSum(num1,num2,operation){
//   var sum = num1 + num2;
//   operation(sum);
// }

// operationOnSum(1,1, divideBy2); // Outputs 1

// operationOnSum(1,1, multiplyBy2); // Outputs 4

//
//
//
//
//

//
//

// What is memoization?
// Memoization is a form of caching where the return value of a function is cached based on its parameters. If the parameter of that function is not changed, the cached version of the function is returned.

// function memoizedAddTo256() {
//   var cache = {};

//   return function (num) {
//     if (num in cache) {
//       console.log("cached value");
//       return cache[num];
//     } else {
//       cache[num] = num + 256;
//       return cache[num];
//     }
//   };
// }
// var memoizedFunc = memoizedAddTo256();

// document.write(memoizedFunc(1)); // Normal return
// document.write(memoizedFunc(1)); // cached return

// // *****************************

//
//
//
//

//

// /
//

//
//

// function a(){
//     return "hello" , this.nm
// }
// var obj = {nm: "ram" ,nm:"sham"}
// document.write(a.call(obj))  //op sham
// //
// //

//

//

//
//

//

//

//
//

//

//

//
//

// . What is recursion in a programming language?
// Recursion is a technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result

// function computeSum(arr){
//    if(arr.length === 1){
//     return arr[0];
//   }
//   else{
//     return arr.pop() + computeSum(arr);
//   }
// }
// document.write(computeSum([5,5,5,5]) )// Returns 20
// // = 5+5+5+5= 20

//

//

//
//

//

//

//
//

// What is the use of a constructor function in javascript?
// Constructor functions are used to create objects in javascript.
// When do we use constructor functions?
// If we want to create multiple objects having similar properties and methods, constructor functions are used.
// Note- The name of a constructor function should always be written in Pascal Notation: every word should start with a capital letter.

// function Person(name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// var person1 = new Person("Vivek", 76, "male");
// document.write(person1);

// var person2 = new Person("Courtney", 34, "female");
// document.write(person2);

//

//

//
//

//

//

//
//

//

//

//// interview asked questiosn

// how to reverrse a sting in js

// let str = 'helo'
// const reversed = str.split("").reverse().join("");
// document.write(reversed);
//
//
//
//split() method splits the stirng into an array of characters ,
//reverse()  method revverse the splied part
//join( ) method joins all the characters back into a string and compares
//

//how to check if the sting is palindrome or not

// function palindrm(str) {
//   if (str == str.split("").reverse().join("")) {
//     document.write("its a palindrome");
// ;  } else {
//     document.write("its not a palindrome");
//   }
// }palindrm("racec  ar");  // op its a palindorme

// what is hoisting in js
// hoisitng is a mechanism where var iables and functinos decalraitons are moaved to the top of their respective scopes before  code execution

// //  how to find the amximum value  in an array
// arr=[34,3,35,3,3,45,46,6,7,545,7,56,7,4,6,]
// const max = Math.max(...arr);
// document.write(max)
// //math.max  which returns the maxmaum value among the array (arr)

// // symbol it stores an anaonymus and unique value
// let sym1= Symbol('symbol');
// document.write(typeof(sym1))

//

// implicit type Conversions

// x = 1;
// y = "ab";
// z = undefined;
// console.log(x || y); //////1

// console.log(y || z); ////ab

// console.log(x && y); //////ab

// console.log(y && z); ///// undef

// and for No. im impalct conver.

// a = 1;
// b = "3";
// console.log(a + b);
// console.log(a - b);

//

//

//

//

//

//

//

//

//

//

//

//

//

// to make js array manipulation easier we usse array methods to make our work  easier and the code clean
// .map() .filter find findIndex .indexOF() .sort .forEach .fill  .concat .slice  every reverse  some push popincludes join shift   reduce unshift

//

// exxplqin passed by value and passedd by Reference
// In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference.

// #34589 address of vluae

// this keyword refers to the object that the function is a poroperty of the value of the this keyword will alwys depend on object

//
//
//
//
//

//
//

// // html must asked questin in interview

// DOCTYPE

// Block&Inline elements

// Tags&Attributes

// Head & Title

// Imports (script, style...)

// Headingss

// Tables

// Anchors & navigation Lists (unordered +ordered)

// Forms& Input types

// Events basics

// Images

// Semantic HTML

// Local & Session storage
//  ******************************************** //

//  css must asked questions in interview questions

// Selectors

// basic

// combinational

// Psuedo

// selectors

// elements

// Specificity

// Inheritance

// Box model

// Fonts & Typography

// Colors

// Positioning

// Units (absolute + relative)

// Overflow

// Float

// Display & Flex

//  ******************************************** //

// js must asked interview questions

// Primitives

// Scopes & Hoisting

// Closures

// Execution context

// Variables (var, let, const)

// Operators

// Type Conversions

// Arrays + methods

// Objects+ methods

// Functions + Arrow functions

// Try Catch & Error handling

// Strict mode

// Timeout & Interval

// Classes
//
//
//
//
//
//
//
//
//
//
//
//
// *********************************************

// front end stack
// basics
//    HTML CSS Js bootsrtap
//mid
//  js view angular react npm                cloud googlecld  aws azure                               database redis mongodb mysql
//pro
// cicd   dockerr circleci kubernetes    jerkins
//tools  postman vs code jira git and github
//
// *************************************************

// *************************************************
// pycharm
//jupyter
//vs code
//  atom
//
// //sublime
// //*********************************************** */
// //
// //
// //
// //
// //
// //frnt end
// //web app dev
// // js dev
// // ui ux designr
// // full stack
// // devopps engin

// // adobe xd;

// //./////// counter incremnt

// const btn = document.getElementById("increment");
// const cntrnm = document.getElementById("num");
// let counter = 1;

// function increcntr() {
//   counter++;
//   cntrnm.innerHTML = counter;
// }

// btn.addEventListener("click", increcntr);
// // //./////// counter incremnt
// ///////////////
//////////
///////////////////////////
// console.log('3 ' + 3 + 4);  ////3344

/////////////////////
////// promises and fetch apis

const promisobj = fetch("/data.json");

const promisagn = promisobj.then((response) => {
  const promisobj2 = response.json();
  promisagn.then((data) => {
    console.log(data);

    return undefined; 
  });
  return null;
});
