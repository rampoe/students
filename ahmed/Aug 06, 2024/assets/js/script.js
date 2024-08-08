"use strict";

// let student = {
//   name: "Ahmed",
//   age: {
//     trueAge: 14,
//     falseAge: 17,
//   },
//   likesJS: true,
// };

// document.write("Hello World");

// let age = +prompt("How old are you?");

// if (age < 18) {
//   document.write("Здарова малыш");
// } else if (age < 40) {
//   document.write("Привет");
// } else {
//   document.write("Здравствуйте!")
// }

// let firstName = prompt("What's your name?");
// document.write(firstName);

// alert(typeof document);

// let redText = document.getElementById("red");

// redText.style.backgroundColor = "yellow";


// redText.style.color = "red"

// let color = prompt("какой фон вы хотите?");
// let body = document.getElementById("body");
// body.style.backgroundColor = color;

// let a = document.getElementById("a");
// let b = document.getElementById("b");

// let age = +prompt("Enter your age:");

// if (age >= 18) {
//   a.style.display = "block";
// } else {
//   b.style.display = "block";
// }

document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#text").classList.toggle("show");
});