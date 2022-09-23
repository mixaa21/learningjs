// Литералы Bigint записываются как строка цифр, за которой следует буква n в нижнем регистре.
// По умолчанию они десятичные, но можно применять префиксы 0Ь, Оо и Ох для двоичных, восьмеричных и шестнадцатеричных Bigint

dec = 1234n
binary = 0b1010n
octal = 0o777n
hex = 0x8000000000000000n

console.log(`Type 1234n = ${dec} ${typeof dec}
Type 0b1010n = ${binary} ${typeof binary}
Type 0o777n = ${octal} ${typeof octal}
Type 0x8000000000000000n = ${hex} ${typeof hex}`)

// Для преобразования обыкновенных чисел или строк JavaScript в значения
// Bigint можно использовать функцию Bigint()

console.log(`BigInt(Number.MAX_SAFE_INTEGER): `);
console.log(BigInt(Number.MAX_SAFE_INTEGER))
console.log(`"1" + "0".repeat(100) + "1":`);
let string = "1" + "0".repeat(100) + "1"
console.log(BigInt(string));

// Арифметические действия со значениями B ig in t работают подобно арифметическим действиям с обыкновенными числами JavaScript за исключением
// того, что деление отбрасывает любой остаток и округляет в меньшую сторону (по направлению к нулю):
console.log(`1000n + 2000n = ${1000n + 2000n}`);
console.log(`3000n - 2000n = ${3000n - 2000n}`);
console.log(`2000n * 3000n = ${2000n * 3000n}`);
console.log(`3000n / 997n = ${3000n / 997n}`);
console.log(`3000n % 997n = ${3000n % 997n}`);

// Хотя стандартные операции +,-,*,/,% и ** работают с B ig in t, важно понимать, что смешивать операнды типа B ig in t с обычными числовыми операндами нельзя.
// Напротив, операции сравнения работают со смешанными числовыми типами (в подразделе 3.9.2 объясняется отличие между == и ===)
console.log(`1 < 2n ${1 < 2n}`);
console.log(`2 > 1n ${2 > 1n}`);
console.log(`О == On ${0 == 0n}`);
console.log(`О === On ${0 === 0n}`);

