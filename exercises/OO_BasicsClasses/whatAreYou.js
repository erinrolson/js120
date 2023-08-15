/*
The info() instance method accesses the execution context's `constructor` property.
The constructor property returns a reference to the constructor function. The 
constructor function has a name property which returns the function name, as specified
when it was created. 
*/

class Cat {
  constructor(name) {
    this.name = name;
  }
  
  greeting() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat('Sophie');
kitty.greeting();