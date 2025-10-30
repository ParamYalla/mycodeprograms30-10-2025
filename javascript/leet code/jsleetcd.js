//  leet code problems

// // function hoisting
// // acces to function before we intiailize it

// document.write(add(3,2));

// function add(a,b){
//    a= a+b;   //5
//     return a ;
// }

// closure an important topic in js when a funcitn is creaddte it has acces to a refernce  to all th variables declared around it , also knwn as lexical environmment,,,,  have acces to variables everywhere

//closure is an inner function that has  accces to the outer  (enclosing )  functions variable  - scope chains its own scope chain the closure has threesccope chains >> its own scope  >> the outer function variables >> global variables  //

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
// document.write(q(1,2)); // op 3

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
//   } else {
//     document.write("its not a palindrome");
//   }
// }palindrm("racecar");  // op its a palindorme

// what is hoisting in js
// hoisitng is a mechanism where variables and functinos decalraitons are moaved to the top of their respective scopes before  code execution

// //  how to find the amximum value  in an array
// arr=[34,3,35,3,3,45,46,6,7,545,7,56,7,4,6,]
// const max = Math.max(...arr);
// document.write(max)
// //math.max  which returns the maxmaum value among the array (arr)

// // symbol it stores an anaonymus and unique value
// let sym1= Symbol('symbol');
// document.write(typeof(sym1))

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
//

// to make js array manipulation easier we usse array methods to make our work  easier and the code clean
// .map() .filter find findIndex .indexOF() .sort .forEach .fill  .concat .slice  every reverse  some push popincludes join shift   reduce unshift

//
//
//
//
//
//


//
//

//

  