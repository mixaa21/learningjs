// Возведение в степень
let x = Math.pow(2,3)
console.log(`Возведение в степень: \nMath.pow(2,3) = ${x}\n`);

// Округление до ближайшего целого если 0.5 округляет в большую сторону
x = Math.round(0.5)
console.log(`Округление до ближайшего целого если 0.5 округляет в большую сторону: \nMath.round(0.5) = ${x}\n`);

// Отбрасывание дробной части числа
x = Math.trunc(7.4)
console.log(`Отбрасывание дробной части числа: \nMath.trunc(7.4) = ${x}\n`);

// Округление числа в большую сторону
x = Math.ceil( 4.3)
console.log(`Округление числа в большую сторону: \nMath.ceil(4.3) = ${x}\n`);

// Округление числа в меньшую сторону
x = Math.floor( 3.6)
console.log(`Округление числа в меньшую сторону: \nMath.floor(3.6) = ${x}\n`);

// Возвращение абсолютной величины числа
x = Math.abs( -7)
console.log(`Возвращение абсолютной величины числа: \nMath.abs(-7) = ${x}\n`);

// Возвращение наибольшего числа из перечисленных
x = Math.max( 1,2,3,4,5)
console.log(`Возвращение наибольшего числа из перечисленных: \nMath.max( 1,2,3,4,5) = ${x}\n`);

// Возвращение наибольшего числа из перечисленных в массиве
arr = [1,2,3,4,5,6,7,8]
x = Math.max.apply(null,arr)
console.log(`Возвращение наибольшего числа из перечисленных в массиве: \nMath.max.apply(null,arr) = ${x}\n`);

// Возвращение наименьшего числа из перечисленных
x = Math.min( 1,2,3,4,5)
console.log(`Возвращение наименьшего числа из перечисленных: \nMath.min( 1,2,3,4,5) = ${x}\n`);

// Возвращение наименьшего числа из перечисленных в массиве
arr = [1,2,3,4,5,6,7,8]
x = Math.min.apply(null,arr)
console.log(`Возвращение наименьшего числа из перечисленных в массиве: \nMath.min.apply(null,arr) = ${x}\n`);

// Возвращение псевдослучайного числа, где 0 <= х < 1.0
x = Math.random()
console.log(`Возвращение псевдослучайного числа, где 0 <= х < 1.0: \nMath.random() = ${x}\n`)

// Возвращение числа PI
x = Math.PI
console.log(`Возвращение числа PI: \nMath.random() = ${x}\n`)

// Возвращение числа Эйлера
x = Math.E
console.log(`Возвращение числа Эйлера: \nMath.random() = ${x}\n`)

// Возвращение квадратного корня числа
x = Math.sqrt(9)
console.log(`Возвращение квадратного корня числа: \nMath.sqrt(9) = ${x}\n`)

// Возвращение кубического корня числа
x = Math.cbrt(27)
console.log(`Возвращение кубического корня числа: \nMath.cbrt(27) = ${x}\n`)

// Вычисление синуса
x = Math.sin(360)
console.log(`Вычисление синуса: \nMath.sin(360) = ${x}\n`)

// Натуральный логарифм 10
x = Math.log(10)
console.log(`Натуральный логарифм 10: \nMath.log(10) = ${x}\n`)

// Math.E в кубе
x = Math.exp(3)
console.log(`Math.E в кубе: \nMath.exp(3) = ${x}\n`)

// Квадратный корень из суммы квадратов всех аргументов (Math.sqrt(9*9+3*3))
x = Math.hypot(9,3)
console.log(`Квадратный корень из суммы квадратов всех аргументов, эквивалентно (Math.sqrt(9*9+3*3)): \nMath.hypot(9,3) = ${x}\n`)

// Десятичный логарифм
x = Math.log10(100)
console.log(`Десятичный логарифм: \nMath.log10(100) = ${x}\n`)

// Двоичный логарифм
x = Math.log2(1024)
console.log(`Двоичный логарифм: \nMath.log2(1024) = ${x}\n`)

