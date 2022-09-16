// строки неизменяемы
let s = "hello world!"
console.log(s.toUpperCase());
console.log(s);

// массивы и объекты изменяемы
const o = {}
const a = ['222']
o.x = 4
a[0] = 'bbb'
console.log(o, a);

// два объекта и два массива не равны друг другу
const o1 = {}
const o2 = {}
const a1 = []
const a2 = []
console.log(o1 === o2, a1 === a2);

// массивы и объекты называют ссылочными типами, они указывают на ссылку с нужным объектом или массивом
const o3 = {}
const o4 = o3
o4.x = 3
console.log(o4 === o3);
console.log(o4, o3);

// для создания копии массива можно использовать разные методы
const a3 = [1,2,3,4,5]
const a4 = [6,7,8]

// для одного аргумента
const a7 = Array.from(a3)
// для нескольких
const a5 = [...a3, ...a4]
const a6 = a3.concat(a4)
// кастом функция
function concatArray(...arr) {
    let outArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            outArr.push(arr[i][j])
        }
    }
    return outArr
}
const a8 = concatArray(a3,a4)
console.log(a7, a5, a6, a8);

// для создания копии объекта
// встроенная функция передает символы
let o5 = {
    name: "Mikhail",
    surname: "Dildin",
    [Symbol('id')]: 1
}
let o6 = Object.assign({},o5)
console.log('o6:',o6)
console.log(o6 === o5)

// кастом функция из key in obj не передает символы
function createCloneObj (obj) {
    let targetObj = {}
    for (let key in obj) {
        targetObj[key] = obj[key]
    }
    return targetObj
}
const o7 = createCloneObj(o5)
console.log('o7:',o7)
console.log(o7 === o5)

// создание неперечисляемого и неперезаписываемого свойства
Object.defineProperty(o5,'salary', {value: 42,
    writable: false})

for (let key in o5) {
    console.log(key)
}




