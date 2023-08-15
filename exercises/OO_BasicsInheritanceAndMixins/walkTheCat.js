const walkMixin = {
  walk() {
    return `Lets go for a walk!`;
  }
};

const CatPrototype = {
  init(name) {
    this.name = name;
    return this;
  },
  
  greet() {
    return `Hello! My name is ${this.name}!`;
  }
};

Object.assign(CatPrototype, walkMixin);

let kitty = Object.create(CatPrototype).init('Sophie');
console.log(kitty.greet());
console.log(kitty.walk());
