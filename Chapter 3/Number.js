// Результатом выполнения числовой операции, которая превышает наибольшее представимое число (переполнение), будет особое значение бесконечности, Infinity.
x = Number.POSITIVE_INFINITY
console.log(`Положительная бесконечность: \nNumber.POSITIVE_INFINITY = ${x}\n`)

x = Number.NEGATIVE_INFINITY
console.log(`Отрицательная бесконечность: \nNumber.NEGATIVE_INFINITY = ${x}\n`)

// Особое значение NaN, которое не равно никому, даже самому себе
x = Number.NaN
console.log(`Особое значение NaN, которое не равно никому, даже самому себе: \nNumber.NaN = ${x}\n`)

// Так как NaN не равна самой себе, ее можно проверить так
y = Number.NaN
x = x !== x
console.log(`Так как NaN не равна самой себе, ее можно проверить так: \nx !== x = ${x}\n`)

// Свойство MIN_SAFE_INTEGER минимальное безопастное число
x = Number.MIN_SAFE_INTEGER
console.log(`Свойство MIN_SAFE_INTEGER минимальное безопасное число: \nNumber.MIN_SAFE_INTEGER = ${x}\n`);

// Свойство MAX_SAFE_INTEGER минимальное безопастное число
x = Number.MAX_SAFE_INTEGER
console.log(`Свойство MAX_SAFE_INTEGER максимальное безопасное число: \nNumber.MAX_SAFE_INTEGER = ${x}\n`);

// Наименьшая разница между числами
x = Number.EPSILON
console.log(`Наименьшая разница между числами: \nNumber.EPSILON = ${x}\n`)

// Метод parseInt преобразовывает строку в число, второй необязательный аргумент указывает систему счисления, по умолчанию 10
x = Number.parseInt("1111",2)
console.log(`Метод parseInt преобразовывает строку в число, второй необязательный аргумент указывает систему счисления: \nNumber.parseInt("1111",2) = ${x}\n`);

// Метод parseFloat преобразовывает строку в число только для деситичных чисел
x = Number.parseFloat("10.5")
console.log(`Метод parseFloat преобразовывает строку в число только для деситичных чисел: \nNumber.parseFloat("10.5") = ${x}\n`);

// Метод isNan проверяет переменную на свойство NaN
x = Number.isNaN(Number.NaN)
console.log(`Метод isNan проверяет переменную на свойство NaN: \nNumber.isNaN(Number.NaN) = ${x}\n`);

// Метод isFinite проверяет переменную на свойство infinity (бесконечность), если переменная конечна, вернет true иначе false
x = Number.isFinite(10)
console.log(`Метод isFinite проверяет переменную на свойство infinity (бесконечность), если переменная конечна, вернет true иначе false: \nNumber.isFinite(10) = ${x}\n`);

// Метод isInteger проверяет переменную, является ли она целым числом
x = Number.isInteger(10.5)
console.log(`Метод isInteger проверяет переменную, является ли она целым числом: \nNumber.isInteger(10.5) = ${x}\n`);

// Метод isSafeInteger проверяет переменную, является ли х целым безопасным числом -(2**53) < х < 2**53
x = Number.isSafeInteger((Number.MAX_SAFE_INTEGER+1))
console.log(`Метод isSafeInteger проверяет переменную, является ли х целым безопасным числом -(2**53) < х < 2**53: \nNumber.isSafeInteger((Number.MAX_SAFE_INTEGER+1)) = ${x}\n`);





