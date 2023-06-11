// объекты в реальных приложениях часто имеют сложную структуру. Использовать глубоко вложенные объекты неудобно 

const greeting = `${user.company.name} was founded in ${user.company.createdAt}`;
console.log(greeting); 
// слишком много вложенных уровней и точек(ну типа)

// лучше сразу вкладывать в промежуточную константу, чтобы вкладывать было удобнее 
const company = user.company; 

/* 
деструктуризация - специальный синтаксис, по которому из объекта мы можем извлекать части. очень удобный способ, позволяет сократить код и сделать его более понятным 
*/

const person = {
    firstName: 'Rasmus',
    lastName: 'Lerdorf',
    manager: true,
} // это соавтор php

const { firstName, manager } = person;

console.log(firstName); // => 'Rasmus'
console.log(manager); // => true

// мы теперь не создаём объект, а раскладываем его на части. 

/* 
В случае отсутствия свойств в объекте, деструктуризация позволяет задавать значения по умолчанию для таких свойств:

const person = { firstName: 'Rasmus', lastName: 'Lerdorf' };

console.log(person.manager); // undefined
const { manager = false } = person;
console.log(manager); // => false

https://repl.it/@hexlet/js-objects-destructuring-default-value

Деструктуризация может быть вложенной. Она позволяет извлекать части объектов на любую глубину. Поэтому наш пример выше можно переписать так:

// const user = response.data.attributes;
// const links = response.data.links;
// const author = response.data.relationships.author;

const { links, attributes: user, relationships: { author } } = response.data;

У spread оператора есть похожий, но выполняющий обратное действие оператор, называемый rest. С его помощью во время деструктуризации можно собрать все "оставшиеся" свойства в один объект:

const user = { name: 'Tirion', email: 'support@hexlet.io', age: 44 };

const { name, ...rest } = user;

console.log(rest);
// => { email: 'support@hexlet.io', age: 44 }

Деструктуризация хоть и не является обязательным элементом и она не влияет на архитектуру программ, но ее использование делает код чище и понятнее (если не увлекаться глубиной). */