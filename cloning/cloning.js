// клонировать объекты придётся часто. При клонировании мы создаём копию, то есть новый объект, который наполнен теми же данными.

// оно эмулируется через assign 

const user = {name:'Vasya'};

const userCopy = Object.assign({}, user)

console.log(user === userCopy);

// в результате два разных объекта, но с одним и тем же содержимым. Они разные, поэтому изменения в одном не меняют данные в другом. 

/* ещё есть clone() из библиотеки lodash, абсолютно идентичен тому, что я вписал выше, но именование поприятнее, понятно что делает.
Клонирование способами, приведёнными выше не затрагивает вложенные объекты. Они оказываются в новом объекте по ссылке из старого. 
*/

// это поверхностное клонирование, вложенные объекты так лежат по ссылке из старого

// основная проблема - много жрёт производительности, если клонировать глубоко(deep)