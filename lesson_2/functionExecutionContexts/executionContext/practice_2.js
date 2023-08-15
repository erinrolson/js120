// What will the following code output?
// difference btw this problem and problem 1?

let obj = {
  func: function() {
    return this;
  },
};

let context = obj.func();

console.log(context);

/*
`context` is initialized to the return value of invoking the `func` method on `obj`.
`func` returns the reference assigned to `this` which is a reference to the object 
assigned to obj as this is the execution context for the method call. 
*/

