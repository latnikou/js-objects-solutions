/* 
Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект данными из другого объекта по разрешенному списку ключей. Параметры:

    Исходный объект
    Список ключей которые нужно заменить
    Данные, которые нужно сливать в исходный объект

В случае, когда список ключей пустой, нужно сливать все данные полностью.
*/

// показалась очень простой эта задача, лул, решил через lodash и pick

const fill = (obj, toChange, data) => {
    if (toChange.length === 0) {
      return Object.assign(obj, data);
    }
    const merged = _.pick(data, toChange);
    return Object.assign(obj, merged);
  };


// решение учителя 

const fill2 = (object, keys, data) => {
    const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
    Object.assign(object, filteredData);
}

// хмм, а ведь и правда не просили возвращать, просили только слить
