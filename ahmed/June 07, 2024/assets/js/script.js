"use strict";

// // || - ИЛИ (or в Python)
// alert(true || true);  // true
// alert(true || false);  // true
// alert(false || true);  // true
// alert(false || false);  // false

// // && - И (and в Python)
// alert(true && true);  // true
// alert(true && false);  // false
// alert(false && true);  // false
// alert(false && false);  // false

// // ! - НЕ (not в Python)
// alert(!true);
// alert(!false);

// alert(!1); // false
// alert(!0); // true

// alert(!"0");

// alert(Boolean("0"));

// alert(true && true);

// let a = +prompt("A=");
// let b = +prompt("B=");
// alert(a > 2 && b <= 3);

// let a = +prompt("A =");
// let b = +prompt("B =");
// if (a > 2 && b <= 3) {
//   alert(true);
// } else {
//   alert(false);
// }

// let a = +prompt("A=");
// let b = +prompt("B=");
// alert(a % 2 == 1 || b % 2 == 1);

let a = +prompt("A=");
let b = +prompt("B=");
// alert((a % 2 == 1 && b % 2 == 0) || (a % 2 == 0 && b % 2 == 1));

alert((a + b) % 2 == 1);
