// what is logged to the console?
// explain why

let qux = { foo: 1 };
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);

/*
2 is logged to the console. 
On line 4 the global variable qux is declared and initialized to 
an object literal { foo : 1 }. On line 5 the global variable baz
is declared and initialized to the return value of passing the object
referenced by `qux` as the prototype object argument to `Object.create`, 
returning a new object whose prototype is set to the object assigned to qux. 
On line 6 `baz.foo` gets the value of 1. Though `baz` does not have it's own
property `foo`, JavaScript searches the prototype chain and finds the
property `foo` on the prototype of `baz` which is the object reference by `qux`
and gets the value 1. `qux.foo` gets the value of 1 as `foo` is a property of the 
object referenced by `qux`. The expression 1 + 1 is then evaluated, logging 2 to
the console.
*/