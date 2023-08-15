// consider the following program
class Pet {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}

class Cat extends Pet {
  // constructor(name, age, color) {
  //   super(name, age);
  //   this.color = color;
  // }
  
  info() {
    console.log(`My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`);
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());

// My cat Pudding is 7 years old and has black and white fur.
// My cat Butterscotch is 10 years old and has tan and white fur.

// OLOO Pattern
// const Pet = {
//   init(name, age) {
//     this.name = name;
//     this.age = age;
//     return this;
//   }
// }

// const Cat = Object.create(Pet);

// Cat.init = function(name, age, color) {
//   Pet.init.call(this, name, age);
//   this.color = color;
//   return this;
// };

// Cat.info = function() {
//   console.log(`My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`);
// };

// let tiny = Object.create(Cat).init('Tiny', 12, 'black and white');
// tiny.info();

// pseudo-classical pattern
// function Pet(name, age) {
//   this.name = name;
//   this.age = age;
// };

// function Cat(name, age, color) {
//   Pet.call(this, name, age);
//   this.color = color;
// }

// Cat.prototype = Object.create(Pet.prototype);
// Cat.prototype.constructor = Cat;

// Cat.prototype.info = function() {
//   return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`;
// };

// let tiny = new Cat('Tiny', 12, 'black and white');
// console.log(tiny.info());

// factory functions
// function Pet(name, age) {
//   return {
//     name : name,
//     age  : age,
//   };
// };

// function Cat(name, age, color) {
//   let pet = Pet(name, age);
//   let cat = {
//     color : color,
//     info: function() {
//       return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`;
//     },
//   };
//   return Object.assign(cat, pet);
// };

// let tiny = Cat('Tiny', 12, 'black and white');
// console.log(tiny.info());