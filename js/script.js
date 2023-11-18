/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('how many movies have you watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('how many movies have you watched?', '');     
    }
}

start();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('one of last movies?', '').trim(),
              b = prompt('how would you rate it?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMoviesDB.movies[a] = b;
            console.log('done');    
        }  else {
            console.log('error');
            i--;
        }    
    }
    
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMoviesDB.count < 10) {
        console.log('too few movies');
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count <30) {
        console.log('you are classic viewer');
    } else if (personalMoviesDB.count >=30) {
        console.log('you are kinoman');
    } else {
        console.log('error occured');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMoviesDB);
    }
}

showMyDB(personalMoviesDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMoviesDB.genres[i - 1] = prompt(`Your favoutite genre under the number ${i}`);
    }
}

writeYourGenres();