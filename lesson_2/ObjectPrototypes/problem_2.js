// what is logged to the console? Explain why. 

let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

console.log(baz.foo + qux.foo);

/*
The program logs 3 to the console.
On line 3 global variable `qux` is declared and initialized to an object literal
{ foo : 1}. On line 4 global variable `baz` is declared and initialized to the
return value of passing the object referenced by `qux` as the prototype object to 
`Object.create`, which returns a new object whose prototype is set to prototype 
object argument. On line 5 `foo` is added as a property to the object refernced
by `baz` and associated with the value 2. 

On line 7 `baz.foo` retrieves the value 2 associated with the `foo` property of `baz`,
as `baz` has its own property `foo` and JavaScript does not need to search the
prototype chain for the property. `qux.foo` retrieves the value of its own property
`foo`, 1. Thus the expression evaluates to 2 + 1, logging 3 to the console.
*/