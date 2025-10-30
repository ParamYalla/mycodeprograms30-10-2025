// document.write("hello");
// var usrname = prompt("enter your name");

// console.log("hey");

// // // consl api
// // console.log("log");
// // console.warn("warn");
// // console.error("error");

// document.getElementById("nm").innerHTML = "<span> Hello <span>" + usrname;

// // variables
// var num = 34;
// var num2 = 6;
// document.write("<br>", num + num2);
// var u;
// var n = null;
// var b = true;
// document.write("<br>", u, "<br>", n, "<br>", b);

// // primitive    undefined null numebr boolean symbol
// // and non primitive referance dtypes            arrays objects

// document.getElementsByTagName("p").innerHTML;

// const ab = 12;
// // ab = 23; assign to const var produce error

// //  functions

// // comparison operator

// //
// //

// //
// //
// //
// //
// //
// //
// ////////////////////////////////////////
// //////////////
///////////try catch/

// function divide() {
//   if (y === 0) {
//     throw new error("cannot divide by zero");
//   }
//   return x / y;
// }
// try {
//   var result1 = divide(10, 2);
//   console.log("result 1:", result1);

//   var result2 = divide(10, 2);
//   console.log("this line wont be executed");
// } catch (error) {
//   console.error("error", error.message);
// } finally {
//   console.log("finally block executed");
// }

// recuurs implemmr=enting  unsing fboonachi sereies

function fiboonachi(targetindex) {
  const sequence = [0n, 1n];
  for (let i = 2; i < targetindex + 1; i++) {
    const next = sequence[i - 2] + sequence[i - 1];
    sequence.push(next);
  }
  return sequence[targetindex];
}

console.log(fiboonachi(5647));

// function fiboonachi(targetindex) {
//   for (targetindex <= 1) return 1;
//   return fiboonachi[targetindex - 1] + fiboonachi[targetindex - 2];
// }
// console.log(fiboonachi(34095));

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  // return n * (n - 1);
  // return n * factorial(n - 1);
  // return n * n - 1;
}
console.log(factorial(3));
