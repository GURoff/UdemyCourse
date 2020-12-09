//--- Lesson 2-16. Функции, стрелочные функции.--- 
"use strict";

//---Функция в общем виде ---
// function showFirstMessage() { //функция. В круглых скобках - аргументы функции
//     console.log("Hello");
// }
// showFirstMessage(); //вызов функции

//--- Введение аргументов в функцию --- Рест Оператор
// function showFirstMessage(text) { 
//     console.log(text);
// }
// showFirstMessage("Hello"); //вызов функции

//--- Как ведут себя переменные внутри функции ---
// let num = 20; //Глобальная переменная
// function showFirstMessage(text) { 
//     console.log(text);
//     let num = 10;
//     //let num = 20; //При объявлении переменной внутри функции - let, снаружи она не будет доступна. Она локальна
//     console.log(num); //Замыкание функции
// }
// showFirstMessage("Hello"); //вызов функции
// console.log(num); 

//--- Замыкание функции ---
// let num = 20; //Глобальная переменная
// function showFirstMessage(text) { 
//     console.log(text);
//     console.log(num); //Замыкание функции
// }
// showFirstMessage("Hello"); //вызов функции
// console.log(num); 

//--- Return ---
// function calc(a, b) {
//     return (a + b); //возврат значения. После return мы ничего не задаем. Стоп функции здесь. 
// }
// console.log(calc(4,3));
// console.log(calc(5,6));
// console.log(calc(7,5));

// --- Второе применение Return. Возвращение значения наружу
// let num = 20;
// function ret() { // Function declaration
//     let num = 50;
//     // здесь проходит какая-то логика, код
//     return num; //возвращает результат работы этой функции, который мы можем записать
// }
// const anotherNum = ret(); //записать сюда результат работы функции ret
// console.log(anotherNum); // чтобы проверить работу функции

//---Классификация функций ---
// Function declaration - записана перед этим, выше. 
//Function Expression - создается только тогда, когда до нее доходит поток кода
// let logger = function() {
//     console.log("Hello");
// }; //не забывать про - ;
// logger(); // ее можно вызвать только после объявления
//Стрелочная функция
// const calc = (a, b) => a + b; // - первый вариант
//const calc = (a, b) => {return a + b}; // - второй вариант
//если такая функция разрастается, то...
// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };