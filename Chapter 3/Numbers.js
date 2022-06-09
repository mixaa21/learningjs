
// Максимум и минимум для целочисленного типа

let minInteger = -9007199254740992
let maxInteger = 9007199254740992

// Максимум и минимум для чисел с плавающей запятой

let minFloat = 5 * Math.pow(10,-324)
let maxFloat = 1.7976931348623157 * Math.pow(10,308)

console.log(minFloat)
console.log(maxFloat)


// можно сохранить число в двоичной системе счисления
let binary = 0b1111
console.log(binary);

// можно сохранить число в восьмиричной системе счисления
let octal = 0o17
console.log(octal);

// можно сохранить число в шестнадцатиричной системе счисления
let hex = 0xF
console.log(hex);

// форматы записи чисел
let billion = 1_000_000_000; // Подчеркивание как разделитель тысяч,
let bytes = 0x89_AB_CD_EF; // Подчеркивание как разделитель байтов,
let bits = 0b0001_1101_0111; //Подчеркивание как разделитель полубайтов,
let fraction = .123_456_789; // Работает и в дробной части. При такой записи автоматически подставится 0

console.log(billion);
console.log(bytes);
console.log(bits);
console.log(fraction);

