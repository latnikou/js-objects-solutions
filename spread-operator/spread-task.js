/* 
Реализуйте и экспортируйте по умолчанию функцию, которая создает объект компании и возвращает его. Для создания компании обязательно только одно свойство – имя компании. Остальные свойства добавляются только если они есть. Параметры:

    Имя (обязательно)
    Объект с дополнительными свойствами (если они есть)

Также, кроме имени, у компаний есть два свойства со значениями по умолчанию. Если значение этих свойств не передано при создании, то они принимают следующие значения:

    state – moderating
    createdAt – текущая дата (в формате Unix-времени. Это число - количество миллисекунд, прошедших с полуночи 1 января 1970 года)

    Используйте спред-оператор для слияния данных внутри и возврата нового объекта.

    Для получения текущей даты в формате Unix-времени используйте метод Date.now()

*/

// моё решение(изначальное)
export const make = (name, obj={}) => {
    const state = Object.hasOwn(obj, 'state') ? obj.state : 'moderating';
    const createdAt = Object.hasOwn(obj, 'createdAt') ? obj.state : Date.now();
    const company = { name: name, state: state, createdAt: createdAt, ...obj };
    return company;
  }
  
  export default make;

// решение тичерское
const solve = (name, data = {}) => {
    const defaultData = {
      state: 'moderating',
      createdAt: Date.now(),
    };
  
    return { ...defaultData, ...data, name };
}