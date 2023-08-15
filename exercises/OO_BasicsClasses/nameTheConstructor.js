/*
Each of the values passed to the console.log method as arguments are values of a 
given type, which were created by constructor functions. Constructor function are 
unique in that they have a prototype property, which references an object that 
contains the instance methods and properties for an instance, as well as a 
constructor property that references the function responsible for creating values
of a given type. By accessing the name property of these functions we can print 
their names. So the string `Hello` originated from a function `String`, the array
`[1,2,3]` originated from a function `Array` and so on. 

The constructor property returns a reference to the constructor function that created
the instance object. The constructor function has a name property, which returns the
function's name as specified when it was created. 
*/

console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);