/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;
//---------------------------------------------
//1) Первую часть задания повторить по уроку
function start() {
    numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?','');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов Вы уже посмотрели?','');
    }
}
start();

// ----------------------
const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for ( let i = 0; i < 2; i++) {
        const   a = prompt('Один из последних просмотренных фильмов?',''),
                b = prompt('На сколько оцените его?', '');
        if (a != null && b != null && a!= "" && b != "" && a.length < 50) {
            personaMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("error");
            i--;
        }   
    }
}
//rememberMyFilms();

function detectPersonalLevel() {
    if (personaMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personaMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}
//detectPersonalLevel();

/*2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы */
function showMyDB(hidden) { //hidden - патерн, или иной шаблон поведения
    if (!hidden) {
        console.log(personaMovieDB);
    }
}
showMyDB(personaMovieDB.privat);

/*3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres*/
function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        //---первый вариант!
        //const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        //personaMovieDB.genres[i - 1] = genre; //массив начинается с нуля! поэтому i-1
        //---второй вариант!
        personaMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); 
    }
}
writeYourGenres();




