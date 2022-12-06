// const name = 'michael'
// const age = 21
//
// function getAge () {
//     return age
// }

// const output = 'привет, меня зовут ' + name + ' и мой возраст: ' + age + 'лет'
// const output = `привет, меня зовут ${name} и мой возраст ${age < 30 ? 'a' : 'b'} год`
// console.log(output)

// const output = `
//     <div>asd</div>
// `
// console.log(output)
//
// const name = 'Michael'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('ael'))
// console.log(name.indexOf('x'))
// console.log(name.startsWith('Mich'))
// console.log(name.startsWith('mich'))
// console.log(name.toLowerCase().startsWith('mich'))
// console.log(name.endsWith('ael'))
// console.log(name.repeat(3))
// const string = '     password      '
// console.log(string.trim())
// console.log(string.trimRight())
// console.log(string.trimLeft())

function logPersone(s, name, age) {
    console.log(s, name, age);
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Michael';
const personAge = 21;

const output = logPersone`Имя: ${personName}, Возраст: ${personAge}!`;

console.log(output);