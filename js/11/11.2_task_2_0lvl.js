/*Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.

Новое использование:*/

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});


// решение 
function showCircle(cx, cy, radius) { // функция принимает координаты центра окружности (cx, cy) и радиус (radius)
    return new Promise(function(resolve, reject) { // возвращаем promise
      // Создаем новый элемент div и задаем стили 
      let div = document.createElement('div');
      div.style.width = 0;
      div.style.height = 0;
      div.style.left = cx + 'px';
      div.style.top = cy + 'px';
      div.classList.add('circle'); // создаем класс circle ...
      document.body.append(div); // добавляем внутрь document.body
  
      setTimeout(() => {
        // Устанавливаем размеры элемента div для создания анимации
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';
  
        // обработчик события transitionend, который будет вызван после завершения анимации
        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div); // в обработчике события удаляется обработчик и вызывается resolve с передачей элемента div.
        });
      }, 0);
    });
  }
  
  // Использование:
  showCircle(150, 150, 100).then(function(div) { 
    //После вызова showCircle, в методе then добавляется обработчик, который будет выполнен, когда промис разрешится.
    div.classList.add('message-ball'); 
    // Добавляем класс "message-ball" и текст внутри элемента div после завершения анимации
    div.append("Hello, world!");
  });
  