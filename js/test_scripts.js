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

// advanced functions exercise
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