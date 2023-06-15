/*Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.
Вот как это должно работать:*/

function makeObservable(target) {
    const handler = {
      set(obj, prop, value) {
        obj[prop] = value;
        obj.observers.forEach(observer => observer(prop, value));
        return true;
      },
    };
  
    target.observe = function (handler) {
      this.observers.push(handler);
    };
  
    target.observers = [];
  
    return new Proxy(target, handler);
  }
  
  let user = {};
  user = makeObservable(user);
  
  user.observe((key, value) => {
    alert(`SET ${key}=${value}`);
  });
  
  user.name = "John"; // выводит: SET name=John

/*Другими словами, возвращаемый makeObservable объект аналогичен исходному, но также имеет метод observe(handler), который позволяет запускать handler при любом изменении свойств.
При изменении любого свойства вызывается handler(key, value) с именем и значением свойства.
P.S. В этой задаче ограничьтесь, пожалуйста, только записью свойства. Остальные операции могут быть реализованы похожим образом.*/