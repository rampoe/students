"use strict";

// function matches() {
//   let b = prompt(
//     "Choose match you want to know  ? : 1(Poland - Netherlands) , 2(Germany - Scotland) 3(Romania - Ukraine) 4(Hungary - Switherland) 5(France - Austria)"
//   );
//   if (b == "1") {
//     alert("Польша 1:2 Нидерланды на стадионе(Гамбург)");
//   }
//   if (b == "2") {
//     alert("Германия 5:1 Шотландия на стадионе(Мюнхен)");
//   }
//   if (b == "3") {
//     alert("Румыния 3:0 Украина на стадионе(Мюнхен)");
//   }
//   if (b == "4") {
//     alert("Венгрия 1:3 Швейцария на стадионе(Кельн)");
//   }
//   if (b == "5") {
//     alert("Франция 1:0 Австрия=лошки на стадионе(Дюссельдорф)");
//   }
// }
// matches();

// function one() {
//   alert("2+2=");
//   function two() {
//     alert("4");
//   };
//   two();
// }
// one();

let outer_var;
let inner_var;

function outer() {

  outer_var = 0;

  function inner() {
    inner_var = 1;
  }

  inner();

}

outer();

alert(outer_var);
alert(inner_var);