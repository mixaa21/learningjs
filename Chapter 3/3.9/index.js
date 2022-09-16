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
let n = 1.2;
console.log(n.toFixed(19));


