"use strict";

// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   btn.style.backgroundColor = "red";
// });

// btn.addEventListener("click", function() {});
















// let c = 0;
// let btn =document.querySelector("#btn");
// btn.addEventListener("click", () => {


  // if (btn.classList.contains("red")) {
  //   btn.classList.remove("red");
  // } else {
  //   btn.classList.add("red");
  // }

  // btn.classList.toggle("red");

  // if (c % 5 == 0) {
  //   btn.style.backgroundColor = "red";
  //   c++;
  // } else if (c % 5 == 1) {
  //   btn.style.backgroundColor = "blue";
  //   c++;
  // }

// })

// document.write("Hello")



let btn = document.querySelector("#btn");
let counter = 0;

btn.addEventListener("click", () => {
  btn.innerHTML = counter;
  counter++;
})