// const myArray = [
//   { id: 5, name: "Ali" },
//   { id: 1, name: "Rizwan" },
//   { id: 6, name: "Haider" },
//   { id: 4, name: "Babar" },
// ];
// let foundElement;
// for (let i = 0; i < myArray.length; i++) {
//   const eleId = myArray[i].id;
//   if (eleId === 1) {
//     foundElement = myArray[i];
//   }
// }

// for (let item of myArray) {
//   const id = item.id;
//   if (id === 1) {
//     foundElement = item;
//   }
// }

// myArray.__proto__.find(function (item, index, array) {
//   console.log(item, "item");
//   return item.id === 1;
// });
// console.log("found elemnt", myArray, foundElement);

// myArray.__proto__.find = function () {
//   alert("abc");
// };

// console.log(myArray, "===myArray");
// myArray.__proto__.aa = function () {
//   alert("our proto");
// };
// myArray.aa();
// myArray.__proto__.find();
// const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const myNewNumber = myNumber.map(function (item, index, array) {
//   return "SMIT-" + item;
// });

// console.log(myNewNumber);

// const foundElement = myArray.find(function (item, index, array) {
//   return item.id === 1;
// });

// const filteredElements = myArray.filter(function (item) {
//   return item.id > 4;
// });

// console.log(foundElement, filteredElements, myArray);
// function getNumber(n) {
//   if (n === 4) {
//     return n;
//   } else {
//     return getNumber(n + 1);
//   }
// }

// 2 : getNumber(3+1)

// 1 : 4

// const result = getNumber(1);
// console.log(result);

// function findFactorial(n) {
//   if (n <= 1) return 1;
//   return n * findFactorial(n - 1);
// }
// const result = findFactorial(5);
// console.log(result);

// 0 = 5 * 4 * 3 * 2 * 1 * 0;
// 120 = 5*4*3*2*1
// n * n - 1 * nn - 1 * nnn - 1 * nnnn - 1;

// 5*4*3*2*1
// 6*5*4*3*2*1

// always stop at `1`
// alway mutlipy be (n)-1

// n*n-1*nn-1*nnn-1
// function findFactorial(n) {
//   if (n <= 1) return 1;
//   return n * findFactorial(n - 1);
// }

// const result = findFactorial(5);
// console.log(result);

// function myFoo() {
//   var encryptedPW = "abc";
//   return function () {
//     console.log(encryptedPW);
//   };
// }

// const getPassword = myFoo();
// getPassword
// let a = [
//   [1, 2],
//   [3, 4],
// ];

// const result = a.flat();
// console.log(result);

// const resultString = result.join("|");
// console.log(resultString);

// const splittedString = resultString.split("|");
// console.log(splittedString);

// console.log("includes:", result.includes(5));
// console.log(
//   "some:",
//   myArray.some(function (item, index, array) {
//     return item.id === 1;
//   })
// );

// const mappedArray = result.forEach(function (item) {
//   return item + 1;
// });
// console.log({ mappedArray, result });

// const accumalted = result.reduce(function (acc, curr, index) {
//   console.log({ acc, curr, index });
//   return acc + curr;
// }, 1);

// console.log(accumalted);

// const myArray = [5, 9, 8, 1, 2];

// // Bubble Sort
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < myArray.length; j++) {
//     if (myArray[j] > myArray[j + 1]) {
//       const temp = myArray[j];
//       myArray[j] = myArray[j + 1];
//       myArray[j + 1] = temp;
//     }
//   }
// }

// console.log(myArray);

// let a = 1;
// b = a;
// b = 2;

// console.log(a, b);
// const myArray = [9, 11, 5, 1, 2];
// // let myArray2 = myArray;
// const myArray2 = myArray.toSorted();
// console.log(myArray, myArray2, "===myArray");

function name(string) {
  return string;
}

(string) => string;

// let myName = ()=>{}

// myName2();
// myName();
// function myName2() {
//   console.log("myName2");
// }
// const myName = a => {
//   console.log("myName");
// };

// function myFoo() {
//   console.log("abc");
//   return function myFoo2() {
//     console.log("def");
//   };
// }

// const a = function myFoo2() {
//   console.log("def");
// };
// a()

// const myFoo = (a, b, c = 0) => {
//   // if (c === undefined) {
//   //   c = 0;
//   // }
//   console.log(a + b + c);
// };

// myFoo(1, 2, 3);
// myFoo(2, 4);

// const greeting = (age, name = "Dear", surname) => {
//   console.log(`Hi ${name} ${surname}. You are ${age} yrs old`);
// };

// greeting(18, "Ahsan","Khan");
// greeting(22, "Abdullah","Polani");
// greeting(16,undefined,"none");

// const myFoo = (a, ...rest) => {
//   console.log(a, rest);
// };

// myFoo(1, 2, 3, 4, 5, 6, 7);

// const students = (first, second, third, ...avg) => {
//   console.log(first, second, third, avg);
// };

// students("Usama", "Bilal", "Zawar", "Faisal", "Abrar", "Abdullah", "Shariq");
// const myArr = [1, 2, 3, 4, 5];
// const myArr2 = [...myArr, 8, 9];
// console.log(myArr2);

// const myObj = { a: "1", b: "2" };
// const myObj2 = { a:'1',b:"2", a: "3" };
// myObj2.a = 4
// console.log(myObj2);

