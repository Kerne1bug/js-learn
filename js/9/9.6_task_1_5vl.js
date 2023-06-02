// Почему instanceof в примере ниже возвращает true? Мы же видим, что a не создан с помощью B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

//потому что а является экземпляиом обьекта который имеет B.prototype в своей цепочке прототипов
// a является экземпляром объекта, у которого B.prototype находится в его цепочке прототипов, и поэтому a instanceof B возвращает true.