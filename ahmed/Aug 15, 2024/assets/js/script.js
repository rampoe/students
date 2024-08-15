"use strict";

let inputField = document.querySelector("#inputField");
let numButton = document.querySelectorAll(".num-btn");

for (let i = 0; i < numButton.length; i++) {
  numButton[i].addEventListener("click", () => {
    inputField.innerHTML += numButton[i].innerHTML;
  })
}

let eqBtn = document.querySelector("#eq");
eqBtn.addEventListener("click", () => {
  inputField.innerHTML = eval(inputField.innerHTML);
});

let cleanBtn = document.querySelector("#cleanBtn");
cleanBtn.addEventListener("click", () => {
  inputField.innerHTML = "";
});