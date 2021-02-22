// --- Передача по ссылке или по назначению, Spread Operator (ES6-ES9) --- //
"use strict";

// let a = 5,
//     b = a;
// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//  a: 5,
//  b: 1
// };
//Передача по ссылке
// const copy = obj; //Ссылка на объект, не копия его.
// copy.a = 10;
// console.log(copy);
// console.log(obj);

//Существует 2 вида копий объекта: Поверхностная и Глубокая. 
// --- Поверхностная копия объекта --- // 
//При помощи цикла функция создает новый объект, перебирая старые свойства, которые были в объекте. 
function copy(mainObj) {
    let objCopy = {};

    let key; //key - свойство
    for (key in mainObj) { //перебирающая конструкция for in
        objCopy[key] = mainObj[key]; //копирование свойств. 
    }
    return objCopy; //возврат objCopy наружу для дальнейшего взаимодействия. 
}

const numbers = {   //объект
    a:2,
    b:5,
    c: {            //вложенный объект
        x: 7,
        y:4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;
// console.log(newNumbers);
// console.log(numbers);

// Object Assign - метод, позволяющий соединить несколько объектов. 
const add = {
    d: 17,
    e: 20
};
//Мы хотим соединить add и numbers 
console.log(Object.assign(numbers, add)); //Первый аргумент тот, в который мы помещяем. Второй тот, который мы помещаем в первый. 
//результат - { a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 } - Независимая поверхностная копия объекта. 

//то же самое действие с пустым объектом, чтоб создать просто копию
const clone = Object.assign({}, add);
clone.d =20;
// console.log(add);
// console.log(clone);

//Копирование массивов. 
const oldArray = ['a', 'b', 'c'];
//const newArray = oldArray; //В данном случае мы создаем ссылку на предыдущий массив. 
//Копия массива
const newArray = oldArray.slice();
newArray[1] = 'AABBCCDD';
console.log(oldArray);
console.log(newArray);


//--- ES6 --- ///
/// --- Spred Operator - Оператор Разворота --- ///

const video = ['YouTube', 'Vimeo', 'RuTube'],
        blogs = ['Wordpress', 'LiveJournal', 'Blogger'],
        internet = [...video, ...blogs, 'VK', 'Facebook']; // Оператор "..." - разворачивает структуры на отдельные элементы. Spread-оператор //
console.log(internet);

//У нас есть объект. И массив. Нам нужно в объект записать массив. Для этого мы разворчиваем массив num, и потом записываем в объект. 
function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2,5,7];

log(...num);

//Создание поверхностных копий объектов
const array = ['a', 'b'];
const newArray1 = [...array];

const q = {
    one:1,
    two:2
};
const newObject = {...q};
console.log(newObject);
