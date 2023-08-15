// class Cat {
//   static newCat() {
//     console.log('Im a new cat!');
//   }
  
//   constructor() {
//     Cat.newCat();
//   }
// }

// let cat = new Cat();

// pseudo-classical 
// function Cat() {
//   Cat.newCat();
// }

// Cat.newCat = function() {
//   console.log('Im a new cat!');
// }

// let cat = new Cat();

// factory function 
function Cat() {
  Cat.newCat();
  return {
    
  };
}

Cat.newCat = function () {
    console.log('Im a new cat!');
}

let cat = Cat();
/*
// is the same even possible with OLOO pattern?
const CatPrototype = {
  
};

let cat = Object.create(CatPrototype);
*/
