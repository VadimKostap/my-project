'use strict';
// methods lessons
const str = 'teSt';
const arr = [1, 2, 4];

// console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));

const logg = 'Hello world';

console.log(logg.slice(6, 11));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));

const bitch = 'Sugg mah dickens';

console.log(bitch.slice(5));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

// advanced functions exercise (cube volume and area calculation)
function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return 'Calculation error!';
}

let volume = 0,
    area = 0;

    volume = length * length * length;
    area = 6 * (length * length);

    return `Cube volume: ${volume}, whole area: ${area}`;
}

calculateVolumeAndArea(5.5); 

console.log(calculateVolumeAndArea(5.5)); 

// train seat numbers reservation

function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return 'Error! Please check the correct seat number';
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return 'Seat doesnt exist'
    }

    return Math.ceil(seatNumber / 4);
}
getCoupeNumber(5);

console.log(getCoupeNumber(5));

// getting correct time format returned

function getTimeFromMinutes(minutesTotal) {
    if(typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return 'Errror! Check your data';
    }
    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0:
        case 1:
            hoursStr = 'hour';
            break;
        default:
            hoursStr = 'hours';    
    }

        return `Its ${hours} ${hoursStr} and ${minutes} minutes`;
}
//add = hours % 10 == 1 ? '' : hours > 1 && hours < 5 ? 'а' : 'ов';
//return `Это ${hours} час${add} и ${mins - hours*60} минут`;

getTimeFromMinutes(181);
console.log(getTimeFromMinutes(181));



// finding maximum number
function findMaxNumber(a, b ,c, d) {
    
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10');


// fibonacci number function

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}
fib(13);
console.log(fib(13));