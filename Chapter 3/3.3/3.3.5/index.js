let re = /[1-5]/gi

let string = '0123456789'

// замена строки по регулярке
string2 = string.replace(re, '-')
console.log(string2);

// нахождения совпадения в строке метод test
console.log(re.test(string));

// нахождение позиции первого совпадения search
console.log(string.search(re));

// массив всех совпадений
console.log(string.match(re));

// разделение строки по регулярке
let re2 = /[37]/
console.log(string.split(re2));



