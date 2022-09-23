// простейшие явные преобразования
console.log(String('111'));
console.log(String(false));
console.log(Boolean([]));

// унарная операция + преобразует в число
console.log('унарная операция + преобразует в число');
console.log(+[]);
console.log(+[3]);
console.log(+[3,4]);
console.log(+{});
console.log(+false);
console.log(+'sdf')
console.log(+'2.4')
console.log(+null)
console.log(+undefined)

// унарная операция ! делает отрицание
console.log('унарная операция ! делает отрицание');
console.log(![]);
console.log(![3]);
console.log(![3,4]);
console.log(!{});
console.log(!false);
console.log(!null)
console.log(!undefined)
console.log(!'sdf')
console.log(!'2.4')

// метод toString с основанием
console.log('метод toString с основанием');
let num = 33
console.log(num,':');
let binary = '0b_' + num.toString(2)
let octal = '0o_' + num.toString(8)
let hex = '0x_' + num.toString(16)
let sss = '36_' + num.toString(36)
console.log(binary);
console.log(octal);
console.log(hex);
console.log(sss);

// преобразования больших чисел
// метод toFixed
let n = 123456.789;
console.log(n.toFixed(2));
console.log(n.toFixed(6));

// метод toExponential
console.log(n.toExponential(2));
console.log(n.toExponential(6));

// метод toPrecision
console.log(n.toPrecision(3));
console.log(n.toPrecision(7));

// метод parseInt парсит числа начинающиеся с 0x или 0X интерпретируя их как 16-ое число, игнорирует символы после цифр
console.log(parseInt('0x23'));
console.log(parseInt('-25'));
console.log(parseInt('23ываыва'));
console.log(parseInt('ываыва23'));
console.log(parseInt('0.15'));

// функция parseInt имеет второй необязательный аргумент, указание системы счисления, цифры следующие после и не имеющие отношения также отбрасываются
console.log("функция parseInt имеет второй необязательный аргумент, указание системы счисления");
console.log(parseInt('1112', 2));
console.log(parseInt('17', 8));
console.log(parseInt('abcd', 16));

// метод parseFloat парсит числа, игнорирует символы после цифр
console.log(parseFloat('-3.15'));
console.log(parseFloat('0.12sdfs'));
console.log(parseFloat('sdfs0.12'));
console.log(parseFloat('-555'));
