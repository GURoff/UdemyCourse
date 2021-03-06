/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/
// Исходный код был взят из предыдущего домашнего задания
'use strict';
const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?','');
console.log(numberOfFilms);

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

//1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
// for ( let i = 0; i < 2; i++) {
//     const   a = prompt('Один из последних просмотренных фильмов?',''),
//             b = prompt('На сколько оцените его?', '');
//         personaMovieDB.movies[a] = b;
// }
/*2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять */ 
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
console.log(personaMovieDB);

/*3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка" */
if (personaMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personaMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}
