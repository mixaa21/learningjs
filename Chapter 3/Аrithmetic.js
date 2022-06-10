// Результатом выполнения числовой операции, которая превышает наибольшее представимое число (переполнение), будет особое значение бесконечности, Infinity.
let x = Number.POSITIVE_INFINITY
console.log(`Положительная бесконечность: \nNumber.POSITIVE_INFINITY = ${x}\n`)

x = Number.NEGATIVE_INFINITY
console.log(`Отрицательная бесконечность: \nNumber.NEGATIVE_INFINITY = ${x}\n`)

// Особое значение NaN
x = Number.NaN
console.log(`Особое значение NaN: \nNumber.NaN = ${x}\n`)

// Деление на ноль дает бесконечность
x = 32543/0
console.log(`Положительная бесконечность: \n32543/0 = ${x}\n`)

// Деление нолья на число дает ноль
x = 0/355
console.log(`Деление нолья на число дает ноль: \n0/355 = ${x}\n`)

// Деление ноль на ноль вернет особое значение NaN (Not a Number)
x = 0/0
console.log(`Деление ноль на ноль вернет особое значение NaN (Not a Number): \n0/0 = ${x}\n`)

// Деление бесконечности на 0 дает бесконечность
x = Number.POSITIVE_INFINITY/0
console.log(`Деление бесконечности на 0 дает бесконечность: \nNumber.POSITIVE_INFINITY/0 = ${x}\n`)

// Деление нуля на бесконечность дает ноль
x = 0/Number.POSITIVE_INFINITY
console.log(`Деление нуля на бесконечность дает ноль: \n0/Number.POSITIVE_INFINITY = ${x}\n`)

// Отрицательный ноль
console.log(`Отрицательный ноль: \n-1/Infinity =`)
console.log(-1/Infinity)
