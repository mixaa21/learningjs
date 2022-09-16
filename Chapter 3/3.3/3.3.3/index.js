let str1 = "add"
let str2 = "b"
let str3 = "Hello world!"

// конкретинация строк, их можно складывать)
console.log(`Строки можно складывать ${str2 > str1} = \${str2 > str1}`);

// Сравнение строк выполняется путем сравнения 16-битных значений. Если первый символ больше или меньше второго, сравнение завершается
console.log(`Сравнение строк выполняется путем сравнения 16-битных значений ${str2 > str1} = \${str2 > str1} `);

// узнать длинну строки используется length
console.log(`Узнать длинну строки используется str2.length = ${str2.length}`)

// метод substring
console.log(`метод substring`);
console.log(`Исходная сторка Hello world! \${str3.substring(1, 3)} = ${str3.substring(1, 3)}`);
console.log(`Исходная сторка Hello world! \${str3.substring(3, 1)} = ${str3.substring(3, 1)}`);
console.log(`Исходная сторка Hello world! \${str3.substring(3)} = ${str3.substring(3)}`);
console.log(`Исходная сторка Hello world! \${str3.substring()} = ${str3.substring()}`);
console.log(`Исходная сторка Hello world! \${str3.substring(-3)} = ${str3.substring(-3)}`);

// метод slice
console.log(`\n`);
console.log(`метод slice`);
console.log(`Исходная сторка Hello world! \${str3.slice(1, 3)} = ${str3.slice(1, 3)}`);
console.log(`Исходная сторка Hello world! \${str3.slice(3, 1)} = ${str3.slice(3, 1)}`);
console.log(`Исходная сторка Hello world! \${str3.slice(3)} = ${str3.slice(3)}`);
console.log(`Исходная сторка Hello world! \${str3.slice()} = ${str3.slice()}`);
console.log(`Исходная сторка Hello world! \${str3.slice(-3)} = ${str3.slice(-3)}`);

// метод split
console.log(`\n`);
console.log(`метод split`);
console.log(`Исходная сторка Hello world! \${str3.split("")} = ${str3.split("")}`)
console.log(`Исходная сторка Hello world! \${str3.split(" ")} = ${str3.split(" ")}`)
console.log(`Исходная сторка Hello world! \${str3.split("l")} = ${str3.split("l")}`)

// метод indexOf
console.log(`\n`);
console.log(`метод indexOf`);
console.log(`Исходная сторка Hello world! \${str3.indexOf("ll")} = ${str3.indexOf("ll")}`)
console.log(`Исходная сторка Hello world! \${str3.indexOf("o")} = ${str3.indexOf("o")}`)
console.log(`Исходная сторка Hello world! \${str3.indexOf("o",4)} = ${str3.indexOf("o",4)}`)
console.log(`Исходная сторка Hello world! \${str3.indexOf("o",5)} = ${str3.indexOf("o",5)}`)
console.log(`Исходная сторка Hello world! \${str3.indexOf("l",-5)} = ${str3.indexOf("l",-5)}`)
console.log(`Исходная сторка Hello world! \${str3.indexOf("sdfsdf")} = ${str3.indexOf("sdfsdf")}`)
console.log(`Исходная сторка Hello world! \${str3.lastIndexOf("l")} = ${str3.lastIndexOf("l")}`)

// Булевские функции поиска в ES6 и последующих версиях
// метод startsWith
console.log(`\n`);
console.log(`метод startsWith`);
console.log(`Исходная сторка Hello world! \${str3.startsWith("Hello")} = ${str3.startsWith("Hello")}`)
console.log(`Исходная сторка Hello world! \${str3.startsWith("hello")} = ${str3.startsWith("hello")}`)

// метод endsWith
console.log(`\n`);
console.log(`метод endsWith`);
console.log(`Исходная сторка Hello world! \${str3.endsWith("d")} = ${str3.endsWith("d")}`)
console.log(`Исходная сторка Hello world! \${str3.endsWith("!")} = ${str3.endsWith("!")}`)

// метод includes
console.log(`\n`);
console.log(`метод includes`);
console.log(`Исходная сторка Hello world! \${str3.includes(" or")} = ${str3.includes(" wo")}`)
console.log(`Исходная сторка Hello world! \${str3.includes("dor")} = ${str3.includes("dor")}`)

// Создание модифицированных версий строки

// метод replace
console.log(`\n`);
console.log(`метод replace`);
console.log(`Исходная сторка Hello world! \${str3.replace("Hello", "bello")} = ${str3.replace("Hello", "bello")}`)
console.log(`Исходная сторка Hello world! \${str3.replace("ll", "11")} = ${str3.replace("ll", "11")}`)
console.log(`Исходная сторка Hello world! \${str3.replace("ll", "")} = ${str3.replace("ll", "")}`)
console.log(`Исходная сторка Hello world! \${str3.replace("ll", 0)} = ${str3.replace("ll", 0)}`)

// метод toLowerCase
console.log(`\n`);
console.log(`метод toLowerCase`);
console.log(`Исходная сторка Hello world! \${str3.toLowerCase()} = ${str3.toLowerCase()}`)

// метод toLowerCase
console.log(`\n`);
console.log(`метод toUpperCase`);
console.log(`Исходная сторка Hello world! \${str3.toUpperCase()} = ${str3.toUpperCase()}`)

// метод normalize
console.log(`\n`);
console.log(`метод normalize`);
console.log(`Исходная сторка Hello world! \${str3.normalize()} = ${str3.normalize()}`)

// метод charAt
console.log(`\n`);
console.log(`метод charAt`);
console.log(`Исходная сторка Hello world! \${str3.charAt(2)} = ${str3.charAt(2)}`)

// метод charCodeAt
console.log(`\n`);
console.log(`метод charCodeAt`);
console.log(`Исходная сторка Hello world! \${str3.charCodeAt(2)} = ${str3.charCodeAt(2)}`)

// метод codePointAt
console.log(`\n`);
console.log(`метод codePointAt (0)`);
console.log(`Исходная сторка Hello world! \${str3.codePointAt(2)} = ${str3.codePointAt(2)}`)

// функции дополнения строк в ES2017
// метод padStart
console.log(`\n`);
console.log(`метод padStart`);
console.log(`Исходная сторка Hello world! \${str3.padStart(2)} = ${str3.padStart(20)}`)

// метод padEnd
console.log(`\n`);
console.log(`метод padEnd`);
console.log(`Исходная сторка Hello world! \${str3.padEnd(20,"-")} = ${str3.padEnd(20,"-")}`)

// Функции усечения пробелов. trim() введена в ES5; остальные в ES2019
// метод trim
console.log(`\n`);
console.log(`метод trim`);
str4 = "   Hello world   "
console.log(`Исходная сторка "   Hello world   " \${str3.trim()} = ${str4.trim()}`)

// метод repeat
console.log(`\n`);
console.log(`метод repeat`);
str4 = "Hello world "
console.log(`Исходная сторка "Hello world " \${str3.repeat(3)} = ${str4.repeat(3)}`)

console.log(`\u2718 \u2718 \u2718\u2718\u2718`)
