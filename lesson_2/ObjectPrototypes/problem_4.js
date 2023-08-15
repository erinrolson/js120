//Write a function that searches the prototype chain of an object for a given
//property and assigns it a new value. If the property does not exist in any of
//the prototype objects, the function should do nothing. The following code should
//work as shown:
/*
input: 
  1) object (object to search)
  2) String (property)
  3) value (of any type)
output: not important
rules: 
  - search an input object's prototype chain, if a matching property is
    found, reassign to value 

Mental Model: 
  - does object have own property ____?
    - if yes reassign to value 
    - if no... does objects prototype have own property?
      - if yes reassign to value
*/
function assignProperty(object, property, value) {

  while (object) { // truthy value (not null)
    if (object.hasOwnProperty(property)) {
      object[property] = value; 
      break;
    }
    object = Object.getPrototypeOf(object);
  }
  return;
}

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false