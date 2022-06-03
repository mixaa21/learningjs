// арифметические операции

console.log(5 + 5) // операция сложения
console.log(5 - 5) // операция вычитания
console.log(3 * 2) // операция умножения
console.log(3 / 3) // операция деления

const points = [{x: 1, y: 2}, {x: 5, Y: 10}]

console.log(points[1].x - points[0].x) // сложные выражения тоже работают

console.log("2" + "2") // + для строк работает как конкатинация строка (объединение)

let count = 0;
console.log(count++)   // инкремент (увеличение на 1)
console.log(count--)   // декремент (уменьшение на 1)

console.log(count += 2) // то же, что и count = count + 2
console.log(count *= 2) // то же, что и count = count * 2

// операции сравнения

let x = 2, y = 3;

console.log(x === y) // строгое равенство с проверкой типов
console.log(x !== y) // строгое неравенство с проверкой типов
console.log(x < y) // меньше
console.log(x > y) // больше
console.log(x <= y) // меньше или равно
console.log(x >= y) // больше или равно

console.log("two" === "three") // две строки разные
console.log("two" > "three") // "tw" в алфавитном порядке больше, чем "th"
console.log(false === (x > y)) // false равно false

// Логические операции объединяют или инвертируют булевские значения:

console.log((x === 2) && (y === 3)) // логические операции &&