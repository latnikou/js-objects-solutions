/*
Реализуйте и экспортируйте по умолчанию функцию, которая "нормализует" данные переданного урока. То есть приводит их к определенному виду. Нормализация происходит путём изменения исходного объекта.

На вход этой функции подается объект, описывающий собой урок курса. В уроке содержатся два поля: имя и описание.

const lesson = {
  name: 'Деструктуризация',
  description: 'как удивить друзей',
};
У некоторых уроков имя и описание могут быть в разном регистре. Такое случается при вводе данных:

const lesson = {
  name: 'ДеструКТУРИЗАЦИЯ',
  description: 'каК удивитЬ друзей',
};
Наша функция должна обновлять содержимое урока по следующим правилам:

Имя капитализируется. То есть первый символ имени становится заглавным, остальные маленькими.
Весь текст описания приводится к нижнему регистру.
import normalize from './normalize.js';
 
const lesson = {
  name: 'ДеструКТУРИЗАЦИЯ',
  description: 'каК удивитЬ друзей',
};
 
// Обратите внимание, что не используется возврат.
// Объекты, как и массивы, передаются по ссылке.
// Изменение переданного объекта внутри отражается на самом объекте:
normalize(lesson);
 
console.log(lesson);
// {
//   name: 'Деструктуризация',
//   description: 'как удивить друзей'
// }
Подсказки
capitalize
toLowerCase
/*