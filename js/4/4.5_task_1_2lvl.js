function Foo() {
    if (!new.target) { throw new TypeError('calling Foo constructor without new is invalid');
      return new Foo();
    }
    this() = '';
  }
  
  try {
    Foo();
  } catch (e) {
    console.log(e);
    // Expected output: TypeError: calling Foo constructor without new is invalid
  }
  
  
  function User(name) {
    if (!new.target) { // в случае, если вы вызвали меня без оператора new
      return new User(name); // ...я добавлю new за вас
    }
  
    this.name = name;
  }
  
  let john = User("John"); // переадресовывает вызов на new User
  alert(john.name); // John