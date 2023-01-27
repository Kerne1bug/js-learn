/**Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?*/

function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = makeUser();
  
  alert( user.ref.name ); // Каким будет результат? // cant read code, потому что this вызывается как функция, нужен точечный синтаксис, как метод 