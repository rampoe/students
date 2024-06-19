"use strict";

// for (let i = 1; i < 28; i++) {
//   if (i < 18) {
//     alert(`Дети ${i} лет не могут пользоваться сайтом.`);
//   } else {
//     alert(`Люди ${i} лет могут пользоваться сайтом.`)
//   }
// }

// let teamOfSuperDevelopers = ["Rahman", "Ahmed", "Ayhan"];
// console.log("Here are the members of Super Developer Team:");
// for (let i = 0; i < teamOfSuperDevelopers.length; i++) {
//   console.log(`${i + 1}. ${teamOfSuperDevelopers[i]}`);
// }

// for (let i = 0; i < 10; i++) {
//   i = -100;
//   alert(i);
// }

// function findMaxSegments(a, b) {
//   if (a <= 0 || b <= 0) {
//     throw new Error("Invalid input: A and B must be positive numbers");
//   }
//   let count = 0;
//   let currentLength = a;
//   while (currentLength >= b) {
//     currentLength -= b;
//     count++;
//   }
//   return count;
// }
// let a = +prompt("A=");
// let b = +prompt("B=");
// let maxSegments = findMaxSegments(a, b);
// console.log("Maximum number of segments:", maxSegments);

// let a = +prompt("A=", "");
// let b = +prompt("B=", "");
// let n = 0;
// while (a - b >= 0) {
//   a -= b;
//   n++;
// }
// alert(n);

// function findArea(a, b) {
//   return a * b;
// }

// console.log(findArea(3, 4));

// const result = findArea(3, 4);
// console.log(result);

let a = +prompt("A=");
function PSG() {
  return a**2;
};

const result = PSG();
alert(result)
