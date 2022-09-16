let strname = "string name"
let symname = Symbol("symbol name")

let obj = {}

obj[strname] = 1
obj[symname] = 2

// создание уникальных символов
let sym1 = Symbol("one")
let sym2 = Symbol("one")

// создание глобальных символов
let sym3 = Symbol.for('two')
let sym4 = Symbol.for('two')

// уникальные символы с одинаковой строкой не равны
console.log(sym1 === sym2)

// глобальные символы с одинаковой строкой равны
console.log(sym3 === sym4)

// свойство keyFor для глобального символа вернет ключ строку при помощи которой был определен символ
console.log(Symbol.keyFor(sym3));





