// 1 Функции
// Function Declaration
// function greet(name) {
//     console.log('Hi - ', name);
// }

//Function Expression
// const greet2 = function greet2(name) {
//     console.log('Hi second - ', name);
// }
// const greet2 = function () {
//
// }

// greet('Michael');
// greet2('Michael');

// console.log(typeof greet);
// console.dir(greet);

// 2 Анонимные функции
// let counter = 0;
// const interval = setInterval(function () { //setTimeout
//     if (counter === 5) {
//         clearInterval(interval) // clearTimeout
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// 3 Стрелочные функции
function greet() {
    console.log('Hi - ');
}

const arrow = (name) => {
    console.log('Hi - ', name);
}
arrow('Michael')

const arrow2 = name => console.log('Hi - ', name);
arrow2('michael')

const pow2 = num => {
    return num ** 2;
}
console.log(pow2('5'))

// 4 Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b;
console.log(sum(41, 4))
console.log(sum())

function sumAll(...all) {
    let result = 0;
    for (let num of all) {
        result += num;
    }
    return result;
}

const res = sumAll(1,2,3,4,5,6,7);
console.log(res);

// 5 Замыкания
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName);
    }
}

const logWithLastName = createMember('Michael');
console.log(logWithLastName('Nikolaev'));