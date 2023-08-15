// implement an `ancestors` method that returns the prototype chain
// of a calling object as an array of object names.

Object.prototype.ancestors = function() {
    let currentObject = this;
    let ancestorList = [];
    
    while(Object.getPrototypeOf(currentObject)) {
      ancestorList.push(Object.getPrototypeOf(currentObject));
      currentObject = Object.getPrototypeOf(currentObject);
    }
    
    return ancestorList;
  }

// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']