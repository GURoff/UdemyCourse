//Условия 2-13
"use strict";

// if (4 == 9) {
//     console.log("OK");
// } else {
//     console.log("Error");
// }

// const num = 50;
// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("Many");
// } else {
//     console.log("Ok");
// }

// (num == 50) ? console.log("Ok") : console.log("Error"); //тирнарный оператор

// //конструкция switch
const num = 50;
switch (num) {
    case 49: 
        console.log("Неверно");
        break;
    case 100:
        console.log("Много");
        break;
    case 50:
        console.log("Окей");
        break;
    default:
        console.log("Не в этот раз");
        break;
}