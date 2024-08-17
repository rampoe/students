"use strict";

let btn = document.querySelector("#btn"),
    text = document.querySelector("#text");

btn.addEventListener("click", () => {
  // text.classList.add("red");

  // if (text.style.color === "red") {
  //   text.style.color = "black";
  // } else {
  //   text.style.color = "red";
  // }

  // if (text.classList.contains("red")) {
  //   text.classList.remove("red");
  // } else {
  //   text.classList.add("red");
  // }

  text.classList.toggle("red");
});