const object = {} // создание объекта
console.log(object)

object.oneProperty = 1 // добавление свойства oneProperty в object со значением 1
console.log(object)
console.log(object.oneProperty) // доступ к значению свойства через точку
console.log(object["oneProperty"]) // доступ к значению через квадратные скобки, если нужно использовать переменную для определения свойства

// console.log(object.two.name) // выбросит исключение что невозможно прочитать свойство undefined
console.log(object?.two?.name) // условный доступ к свойствам "?." вернет undefined если свойств не будет с любым уровнем вложенности


