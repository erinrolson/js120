// Take a look at the following code snippet. Use call to invoke the add method
// but with foo as execution context. What will this return?

let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

// get function object by accessing `bar` property `add`
// use function method `call` on function object passing desired object for
// execution context. 
console.log(bar.add.call(foo));