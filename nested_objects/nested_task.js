/* 
Реализуйте и экспортируйте по умолчанию функцию, которая извлекает из объекта любой глубины вложенности значение по указанным ключам. Параметры:

    Исходный объект
    Цепочка ключей (массив), по которой ведётся поиск значения

В случае, когда добраться до значения невозможно, возвращается null.


*/

// моё решение
export const get = (obj, keys) => {
    for (let i = 0; i < keys.length; i += 1) {
      if (Object.hasOwn(obj, keys[i])) {
        obj = obj[keys[i]]
      } else {
        return null
      }
    }
    if (obj != undefined || obj != null) {
      return obj
    }
  }
  

// решение учителя
export default (data, keys) => {
    let current = data;
    for (const key of keys) {
      const hasProperty = Object.hasOwn(current, key);
      if (!hasProperty) {
        return null;
      }
      current = current[key];
    }
  
    return current;
  };
// жесть элегантное решение