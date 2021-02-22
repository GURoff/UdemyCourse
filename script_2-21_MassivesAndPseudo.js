//---Массивы и Псевдомассивы--- ARRAY //

"use strict";

//const arr = [2,3,6,8,10]; //массив
// arr[99] = 0;
// console.log(arr.length); //размер массива. Количество элементов в массиве
// console.log(arr); //Вывод массива 

//---Работа с концом массива
// arr.pop(); //Убираем последний член массива - 8
//console.log(arr);

// arr.push(10); //Добавляем в конец массива 10. 
// console.log(arr);

//Перебор массива
// --- 1 ---
// for (let i=0; i< arr.length; i++) {
//     console.log(arr[i]);
// }
// --- 2 ---
// for (let value of arr) {
//     console.log(value);
// }

//--- Метод for each ---
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item}: внутри массива ${arr}`);
// });

// const str = prompt("", ""); 
// const products = str.split(", "); //разделение элементов в строке при помощи разделеителя. В скобках - разделитель
// products.sort(); //Метод сортировки. 
// console.log(products.join('; ')); //Объединение элементов массива в строку и разделенных через точку с запятой. 

// const arr = [2,13,26,8,10]; //SORTировка чисел
// arr.sort();
// console.log(arr); //[10, 13, 2, 26, 8]

const arr = [2,13,26,8,10]; //SORTировка чисел
arr.sort(compareNum);
console.log(arr);
//SORTировка по порядку. Алгоритм ьыстрой сортировки. 
function compareNum(a,b) {
    return a - b;
}
