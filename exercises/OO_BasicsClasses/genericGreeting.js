class Cat {
  constructor(name) {
    this.name = name;
  }
  static genericGreeting() {
    console.log(`Hello! I am a cat!`);
  }
  
  personalGreeting() {
    console.log(`Hello! My name is ${this.name}`);
  }
}

Cat.genericGreeting();
let kitty = new Cat('Sophie');
kitty.personalGreeting();