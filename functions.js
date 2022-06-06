// глобальная переменная y
let y = 5

// функция увеличения параметра x на 1
function plus1(x) {
    return x + 1
}

// функция умножения переданного параметра x на глобальную переменную y
let square = function (x) {
    return x * y
}

console.log(square(plus1(y)))

// в ES6 можно использовать стрелочные функции
const plus2 = x => x + 1;
const square2 = x => x * x;

console.log(square(plus2(y)));

// функции определенные в объекте называются методами
let a = []
a.push(1,2,3)
console.log(a);

// метод reverse который разворачивает элементы массива
console.log(a.reverse());

const points = [1,2,3,4]

// добавляем свой метод в объект points
points.sum = function () {
    let count = 0
    this.forEach(i => {
        count += i
    })
    return count
}

console.log(points.sum());

// функция для вычисления абсолютной величины
function abs(x) {
    if (x >= 0) {
        return x
    } else {
        return -x
    }
}

// проверка работы функции, должна вернуть true
console.log((abs(-10) === 10));

// функция вычисления факториала числа (!5 = 5*4*3*2*1 = 120)
function factorial(n) {
    let product = 1
    while(n > 1) {
        product *= n;
        n--
    }
    return product
}

console.log(factorial(5));
