// Class pattern
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
//     return this.width * this.length;
//   }
// }

// class Square extends Rectangle {
//   constructor(size) {
//     super(size, size);
//   }
// }

// console.log(Square.__proto__ === Rectangle); // true
// console.log(Square.prototype.__proto__ === Rectangle.prototype); // true

// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25


// Pseudo-classical pattern
// function Rectangle(width, length) {
//   this.width = width;
//   this.length = length;
// };

// Rectangle.prototype.getLength = function() {
//   return this.length;
// };

// Rectangle.prototype.getWidth = function() {
//   return this.width;
// };

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// };

// function Square(size) {
//   Rectangle.call(this, size, size);  
// };

// Square.prototype = Object.create(Rectangle.prototype);
// Square.prototype.constructor = Square;

// console.log(Square.__proto__ === Function.prototype); // true
// console.log(Square.prototype.__proto__ === Rectangle.prototype); // true

// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25

// Factory Function
// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// };

// Rectangle.prototype.getLength = function() {
//   return this.length;
// };

// Rectangle.prototype.getWidth = function() {
//   return this.width;
// };

// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// };

// function Square(size) {
//   Rectangle.call(this, size, size);
// };

// Square.prototype = Object.create(Rectangle.prototype);
// Square.prototype.constructor = Square;

// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25

// OLOO Pattern
// const Rectangle = {
//   init(length, width) {
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

// const Square = Object.create(Rectangle);

// Square.init = function(size) {
//   Rectangle.init.call(this, size, size);
//   return this;
// };

// let square = Object.create(Square).init(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25

/*
How would you describe the above code?

Lines 1 to 18 define a class `Rectangle`. Lines 20 to 24 define a class `Square`
that inherits from `Rectangle`. On line 26 the global variable `square` is 
declared and initialized to an instance of the `Square` class.

The expression `new Square(5)` instantiates a new instance of the `Square` class.
When the expression is evaluated JavaScript first creates a new empty object
(instance object) and
sets it's prototype to the object referenced by `Square.prototype`.
It then implicitly sets the execution context to the instance object and invokes
`Square`'s constructor method. Within the body of the constructor method 
`super(len, len)` is invoked. `super` is a JavaScript keyword which, when used within
the body of the constructor method, refers to the constructor method of the superclass.
`super(len, len)` invokes the `Rectangle` constructor method with the instance object
set as the execution context giving it own properties `width` and `length`,
set to the value `5`. The instance object is then returned. 

On line 27 an interpolated string is logged to the console with the result of the
expression `square.getArea()` evaluated. The instance object does not have its own 
property `getArea`, however because instances of the `Square` class inherit from
`Rectangle` they have access to instance methods of `Rectangle`. 

'area of square = 25' is then logged to the console.

*/