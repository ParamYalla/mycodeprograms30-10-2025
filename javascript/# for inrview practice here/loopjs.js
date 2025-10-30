// repear this stataemnt 5 times

// let i = 1;

// while(i<=5){
//     console.log( " no.",i);
//     i++;
// }

// document.write("the below text is from file .js <br> <br> <br> ");

// initialize , condition, increment - for loop

// for(let i=0;i<3;i){
//     document.write('print no.',i,'<br>');
//     i++;
// }

// array

// Array=[1,2,3,4,34,34,345,3,453,45,35];
// let index = 0;
// while( index < Array.length){
//     document.write(Array[index],"<br>");
//     index++;
// }

// // \n is used for end line in js

// the every() method checks if all elements ins an arry pass a test (provided as a function)

// Array=[1,2,3,2,4,2,2,4,2,2,2,2]

// const und_five = x => x < 5;

// if (Array.every(und_five)){
//     document.write('all array itms less than 5')
// }

// else{
//     document.write('at least one elemnt is not less than 5')
// }

// the some() method check if some array values pass a test

// var numbers = [4 ,5,6,6,4,4,4,5,5,5,6]
// var someovr18 = numbers.some(myfunction);

// document.getElementById('demo').innerHTML = 'som over 18 is '+ someovr18;

// function myfunction(values, index, array){
//     return values > 18;
// }

// filter ()
// the filter method creates a new array with array elemnts that passes a test

// var num = [4,678,344,4,19,17, 18,44,3,4,3,4]

// var over = num.filter(myfun);

// document.getElementById('demo').innerHTML = over;

// function myfun(vlu, indx,arr){
//     return vlu > 10;
// }

// // map()  applies a function over every elemetn and then returns teh  new array

// index = 0 ;
// array = [1,2,3,4,5]
// square = x => Math.pow(x,2);
// square = array.map(square);
// document.write(array); //op  1 2 3 4 5
// document.write(square);//op 1 4 9 16 25

//
//
//
//
//
//
// loop text
//

// for (var i = 10; i <= 10; i++) {
//   console.log(i,);
// }

// console.log(i,typeof(i));

////// printing even numbers

[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]];

/////////////////////////////

// inputuing form thre form html documet and PerformancePaintTiming

document.getElementById("submit").addEventListener("click", function () {
  let inpt = document.getElementById("textinid").value;

  document.getElementById("output").textContent = "hello," + inpt;
});

/////////////////////////////////////];

let abc = prompt("enter your name: ");
document.getElementById("output").textContent = "hello," + abc;
// document.write("hi " + abc);

[
  /////////////////////
  [[[[[[[[[[[[[[[[[]]]]]]]]]][[[[[[]]]]]]]]]]]]]
];

for (let i = 10; i <= 10; i++) {
  console.log(i);
}

const emojieshow = document.getElementById("demo");

// const emojis = ["😀", "😁", "😎", "😋", "😉", "😊", "😆", "🤣"];

// emojieshow.addEventListener("mouseover", () => {
//   emojieshow.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
// });

const flr = Math.floor(5.5);

/////////////////////////////////////

// function funnm(para) {
//   console.log(`this is my para: ${para} `);
//   cb();
// }
// function cb() {
//   console.log(`this is my para:`);
// }

funnm(39);

//  arrow funtctions

greet = (funnm) => {
  return `this is retund : ${funnm}`;
};
