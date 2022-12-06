// 1 переменные
// camelCase => firstName
// const firstName = "Michael"
// // const age = 21 // number
// const isProgrammer = true // boolean

// const _ = "private"
// const $ = "some value"

// const if = "asd" //error
// const withNum5 = '5'
// const 5withNum = 5 //error

// 2 мутированные
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 операторы
// let currentYear = 2022
// const birthYear = 2001
//
// const age = currentYear - birthYears
// const a = 10
// const b = 5
//
// let c = 32
// c = c + a
// c += a
// c -= a
// c *= a
// c /= a
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++)
// console.log(++currentYear)
// console.log(c)


// 4 типы данных
// const isProgrammer = true
// const name = 'Michael'
// const age = 21
// let x
//
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 приоритет операторов
// const fullAge = 21
// const birthYear = 2001
// const currentYear = 2022
//
// // > < >= <=
// const isFullAge = (currentYear - birthYear) >= fullAge // 20 >= 21 => true
// console.log(isFullAge)

//6 условные операторы
// const courseStatus = 'pending' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//     console.log('курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('курс находиться в процессе разработки')
// } else {
//     console.log('курс не получился')
// }

const isReady = false

// if (isReady) {
//     console.log('все готово')
// } else {
//     console.log('не готово')
// }

// тернарное выражение (простые условия)
// isReady ? console.log('готово') : console.log('не готово')

// const num1 = 42
// const num2 ='42'
//
// console.log(num1 === num2)


// 7 булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators

// 8 функция

// function calculateAge(year) {
//     return 2022 - year
// }

// console.log(calculateAge(2001))
// console.log(calculateAge(2005))
// console.log(calculateAge(1992))

// function logInfoAbout (name, year) {
//     const age = calculateAge(year)
//
//     if (age > 0) {
//         console.log('человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('это будущие')
//     }
// }
//
// logInfoAbout('Michael', 2001)
// logInfoAbout('Elena', 1996)
// logInfoAbout('Aasd', 2022)

// 9 массивы

// const cars = ['bmw', 'audi', 'mazda', 'lada']
// const cars = new Array('mazda', 'lada', 'bmw')
// console.log(cars)
// console.log(cars.length)
// console.log(cars[2])
//
// cars[0] = 'porsche'
// cars[cars.length] = 'ford'
// console.log(cars)

// 10 циклы
// const cars = ['bmw', 'audi', 'mazda', 'lada', 'porsche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars [i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

// 11 объекты
const person = {
    firstName: 'michael',
    lastName: 'nikolaev',
    year: 2001,
    languages: ['ru', 'eng', 'de'],
    hasWife: false,
    greet : function () {
        console.log('greet')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)
person.greet()