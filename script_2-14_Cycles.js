//Циклы

"use strict";

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num ++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i == 6) {
        //break; //останавливает цикл в определенном месте
        continue; //цикл продолжается, но игнорирует то значение, которые указано в if
    }
    console.log(i);
}