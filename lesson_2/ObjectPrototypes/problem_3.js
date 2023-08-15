//What will the following code log to the console? Explain why it logs that value.
//Try to answer without running the code.

let qux = { foo: 1 };
let baz = Object.create(qux);
qux.foo = 2;

console.log(baz.foo + qux.foo);

/*
This program will log 4 to the console.
`baz` does not have its own property `foo` so JavaScript searches the prototype
chain for the property. It finds the property `foo` on `baz`'s prototype `qux`,
which has an associated value of 2, as `qux` had the `foo` property reassigned to 
2 on line 6. Both `baz.foo` and `qux.foo` evaluate to 2, then the result of the 
expression 2 + 2 is logged to the console.

This code snippet demonstrates that objects hold a reference to their prototype
objects, so if the object's prototype changes, those changes are observable in 
the inheriting object as well. 
*/