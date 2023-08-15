// class pseudo-classical pattern

// class Rectangle {
//   constructor(width, length) {
//     this.width = width;
//     this.length = length;
//   }
  
//   getWidth() {
//     return this.width;
//   }
  
//   getLength() {
//     return this.length;
//   }
  
//   getArea() {
//     return this.length * this.width;
//   }
// }

// let rect = new Rectangle(4, 5);

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

// pseudo-classical pattern
// function Rectangle(width, length) {
//   this.width = width;
//   this.length = length;
// };

// Rectangle.prototype.getWidth = function() {
//   return this.width;
// };

// Rectangle.prototype.getLength = function() {
//   return this.length;
// };

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// };

// let rect = new Rectangle(4, 5);

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

//OLOO Pattern
// const Rectangle = {
//   init(width, length) {
//     this.length = length;
//     this.width = width;
//     return this;
//   },
  
//   getWidth() {
//     return this.width;
//   },
  
//   getLength() {
//     return this.length;
//   },
  
//   getArea() {
//     return this.length * this.width;
//   },
// };

// let rect = Object.create(Rectangle).init(4,5);
// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

// Factory Function Pattern
function Rectangle(width, length) {
  return {
    width : width,
    length: length,
    
    getLength() {
      return this.length;
    },
    
    getWidth() {
      return this.width;
    },
    
    getArea() {
      return this.length * this.width;
    },
  }
};

let rect = Rectangle(4, 5);
console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20
