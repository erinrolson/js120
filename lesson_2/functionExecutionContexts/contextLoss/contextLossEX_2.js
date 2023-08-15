// How nested functions suffer from context loss

// Inner function not using surrounding context

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar(); // global execution context
  },
};

obj.foo();        // => undefined undefined

/*
`foo` is a method of `obj`. The function associated with `foo` has a function
declaration within it `bar`. After the function definition of `bar` `bar` is invokes
like so `bar()`. At the time of invocation on line 14 `bar`s execution context
is the global object. This is regardless of the fact that the 'top' invocation
is `obj.foo()`. 

How do we resolve an issue like this?
1) declare a variable in the outer scope `self` that the inner function has access to
2) invoke the inner function with explicit execution context
  - bar.call(this);
3) use bind to return a new function permanently bound to the execution context
   object desired. 
4) use an arrow function as the inner function. Arrow functions, once created, use
   the execution context of function that surrounded it when created. This is the
   most common approach to resolving inner function context loss. 
*/