// class pattern
// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.species = species;
//     this.status = status;
//   }
  
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// };

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, 'cat', status);
//   }
  
//   introduce() {
//     return Animal.introduce.call(this) + 'Meow meow!';
//   }
// };

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, 'dog', status);
//     this.master = master;
//   }
  
//   greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`;
//   }
// };

// factory function pattern
// function Animal(name, age, legs, species, status) {
//   return {
//     name : name,
//     age  : age,
//     legs : legs, 
//     species : species,
//     status : status,
//     introduce() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//     }
//   };
// };

// function Cat(name, age, status) {
//   let animal = Animal(name, age, 4, 'cat', status);
//   let cat = {
//     introduce() {
//       return Animal.introduce.call(this) + 'Meow meow!';
//     }
//   };
  
//   return Object.assign(cat, animal);
// };

// function Dog(name, age, status, master) {
//   let animal = Animal(name, age, 4, 'dog', status);
//   let dog = {
//     masterName : master,
//     greetMaster() {
//       return `Hello ${this.masterName}! Woof, woof!`;
//     }
//   };
  
//   return Object.assign(dog, animal);
// };

// let tiny = Cat('tiny', 12, 'dead');
// console.log(tiny.introduce());

// let aster = Dog('aster', 6, 'happy', 'erin');
// console.log(aster.greetMaster());
// console.log(aster.introduce());

// OLOO
// const Animal = {
//   init(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//     return this;
//   },
  
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   },
// };

// const Cat = Object.create(Animal);
// Cat.init = function(name, age, status) {
//   Animal.init.call(this, name, age, 4, 'cat', status);
//   return this;
// };

// let tiny = Object.create(Cat).init('tiny', 12, 'sleepy');
// console.log(tiny.introduce());


// const Dog = Object.create(Animal);
// Dog.init = function(name, age, status, master) {
//   Animal.init.call(this, name, age, 4, 'dog', status);
//   this.master = master;
//   return this;
// };

// Dog.greetMaster = function() {
//   return `Hello ${this.master}! Woof, woof!`;
// };

// let aster = Object.create(Dog).init('aster', 6, 'happy', 'erin');
// console.log(aster.greetMaster());
// console.log(aster.introduce());

// Pseudo-classical pattern
function Animal(name, age, legs, species, status) {
  this.name = name;
  this.age = age;
  this.legs = legs;
  this.species = species;
  this.status = status;
};

Animal.prototype.introduce = function() {
  return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
}

function Cat(name, age, status) {
  Animal.call(this, name, age, 4, 'cat', status);
};

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

function Dog(name, age, status, master) {
  Animal.call(this, name, age, 4, 'dog', status);
  this.master = master;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.greetMaster = function () {
  return `Hello ${this.master}! Woof, woof!`;
};

let tiny = new Cat('tiny', 12, 'sleepy');
console.log(tiny.introduce());

let aster = new Dog('aster', 6, 'happy', 'erin');
console.log(aster.introduce());
console.log(aster.greetMaster());