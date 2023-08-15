// How passing functions as arguments strips them of intended context objects. 
// Ex: 1
function repeatThreeTimes(func) {
  func();
  func();
  func();
}

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function() { // repeatThreeTimes invoked on line 13 in global context
    repeatThreeTimes(function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    });
  },
};

john.greetings();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined

// Ex: 2
let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function callback(number) { // think about what forEach does on each iteration
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
};

obj.foo();

// => 1 undefined undefined
// => 2 undefined undefined
// => 3 undefined undefined

/*
forEach is invoking the function object passed as an argument for every element
in the calling array. Imagine it like this:
callback(1);
callback(2);
callback(3);
When visualized like so, it's easy to see that each invocation's execution context
is the global object. 

How do we resolve this issue? Same strategies as before + 1 new approach: 
  1) declare a variable like `self` in the outer scope and replace with `this`
  2) use bind function method on callback
  3) pass an arrow function to forEach
  4) pass a 2nd argument to init the thisArg parameter to desired context object. 
*/