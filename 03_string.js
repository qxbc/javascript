const name = 'michael'
const age = 21

function getAge () {
    return age
}

const output1 = 'привет, меня зовут ' + name + ' и мой возраст: ' + age + 'лет'
const output1 = `привет, меня зовут ${name} и мой возраст ${age < 30 ? 'a' : 'b'} год`
console.log(output1)

const output1 = `
    <div>asd</div>
`
console.log(output1)

const name = 'Michael'
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(2))
console.log(name.indexOf('ael'))
console.log(name.indexOf('x'))
console.log(name.startsWith('Mich'))
console.log(name.startsWith('mich'))
console.log(name.toLowerCase().startsWith('mich'))
console.log(name.endsWith('ael'))
console.log(name.repeat(3))
const string = '     password      '
console.log(string.trim())
console.log(string.trimRight())
console.log(string.trimLeft())

function logPersone(s, name, age) {
    if (age < 0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Michael';
const personName2 = 'Max';
const personAge = 21;
const personAge2 = -10;

const output = logPersone`Имя: ${personName}, Возраст: ${personAge}!`;
const output2 = logPersone`Имя: ${personName2}, Возраст: ${personAge2}!`;


console.log(output);
console.log(output2);