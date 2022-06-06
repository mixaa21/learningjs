// создание класса человек, объект этого класса будет иметь одно свойство name и один метод sayHello
class Person {

    constructor(name) {
        this.name = name
    }

    sayHello() {
        return `${this.name} tells you "hello!"`
    }
}

// создаем объект класса
const onePerson = new Person("Mikhail")

// теперь объект имеет свойство name и метод sayHello
console.log(onePerson.name);
console.log(onePerson.sayHello());


