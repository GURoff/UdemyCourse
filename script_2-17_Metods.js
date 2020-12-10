//Методы и свойства строк и чисел 2-17
"use strict";

const str = "test";
const arr = [1, 2, 4];

//Метод length
//console.log(arr.length); //количество элементов в массиве - 3
//console.log(str.length); //длина строки. Тест - 4 знака. 
//console.log(str[2]); //вывести 3ий элемент переменной str, т.е. S
//console.log(str[2] = 'd'); //поменять 3ий элемент str с S на D

//Метод toUpperCase и toLowerCase
//console.log(str.toUpperCase()); //провращает test в TEST (в верхний регистр)
//console.log(str.toLowerCase()); //провращает test в test (в нижний регистр)
//console.log(str);

//Метод indexOf
//const fruit = "Some fruit";
//console.log(fruit.indexOf("fruit")); // отображает число первого элемента в строке

//Метод slice
//const logg = "Hello World";
//console.log(logg.slice(6, 10)); //разделение строки на отдельные элементы <от;до) - пример "Worl"

//const testovani = "I like fruits and vegetables"; 
//console.log(testovani.slice(7, 16)); // - пример 7, 16 это "fruits an"
//console.log(testovani.slice(7)); // 7 - это "fruits and vegetables"
//console.log(testovani.slice(-10, -2)); // то же самое, но справа налево. - пример - vegetabl

//Метод substring - тот же slice, но тут можно задавать первый аргумент больше, чем второй. 
// и не поддерживает отрицательные значения
//console.log(testovani.substring(7, 16));

//Метод substr - вместо второго аргумента конца, мы указываем длину
// т.е. сколько символов необходимо вырезать
//console.log(testovani.substr(6, 5));

// --- ЧИСЛА --- //
// Math. - математические операции с числами

const num = 12.2;
console.log(Math.round(num)); // round округляет число до ближайшего целого. 

const test = "12.2px"; // в данном случае parseInt обрежет строку до целого числового значения
//console.log(parseInt(test)); //parseInt переводит число в другую систему исчисления
//console.log(parseFloat(test)); //parseFloat - берет строку или число, и выводит в десятичном варианте


