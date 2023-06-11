/* 
Клонить и мёржить можно прямо в одной операции. Мы можем делать новые объекты на основе старых, вместо того, чтобы их обновлять. 
*/

const user = { name: 'Tirion', email: 'support@hexlet.io', age: 44};
const data = {name: 'Tirion 2', age: 33};

const copyOfUser = Object.assign({}, user, data);
// скопировали и сделали новый 

// есть вариант проще - спред оператор 

const newUser = { ...user, married:true};

/* спред оператор - возможность расширить новые объекты дополнительными данными */
