let dash = '-'
function exclamationPoint() {
    return '!'
}

// Вставка шаблонов в строку
let string = `Ты ${dash} хороший человек${exclamationPoint()}`

console.log(string);

// теговый шаблон

function tag(strings, ...expressions) {
    strings = strings.filter(el => {
        return el !== ''
    })
    return [...strings, ...expressions]

}

// шаблонная функция
let string2 = tag`One${1}Two${2}Three${3}`
console.log(string2);

// свойство raw не читает управляющие последовательности, поэтому они обрабатываются как простые символы
let string3 = '\n'
console.log(string3.length);
console.log(String.raw`\n`.length);


arr = ['foo','bar','baz']
arr2 = new Array(arr.length)
arr2.fill('-')

console.log(arr2);
let string4 = String.raw({ raw: arr }, ...arr2);
console.log(string4);

function template(strings, ...keys) {
    console.log("Strings", strings)
    console.log("Keys", keys)
    return (function(...values) {
        var dict = values[values.length - 1] || {};
        var result = [strings[0]];
        keys.forEach(function(key, i) {
            var value = Number.isInteger(key) ? values[key] : dict[key];
            result.push(value, strings[i + 1]);
        });
        return result.join('');
    });
}

var t1Closure = template`${0}${1}${0}${1}!`;
console.log((t1Closure('Y', 'A')));  // "YAY!"
var t2Closure = template`${0} ${'foo'}!`;
console.log((t2Closure('Hello', {foo: 'World'})));  // "Hello World!"
