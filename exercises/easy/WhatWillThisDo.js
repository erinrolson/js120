// what will the following code log?

class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something(); // 
console.log(Something.dupData()); // 
console.log(thing.dupData()); //

/*
On line 17 the global variable `thing` is initialized to an object with
an own property `data` and assiciated value of 'Hello'. The object prototype for the
object referenced by `thing` will be the object referenced by `Something.prototype`.
On line 18 the static method `dupData` is accessed on class `Something`, which returns
the string 'ByeBye' which is then logged to the console. On line 19 `.dupData` is
accessed on the variable `thing` which is an instance of the type `Something`. Though
the object reference by `thing` does not have it's own property `dupData` its object
prototype `Something.prototype` does and JavaScript invokes the method, which accesses
the current execution context's `data` property twice, concatenating the string values
and logging `HelloHello` to the console. This program demonstrates that static
properties are not in the prototype chain of instances of a given class.
*/

/*
explain the values logged to the console.

On line 17 the global variable `thing` is declared and initialized to the 
return value of the expression `new Something()` which returns a new instance
of `Something`. 

Within the class declaration for `Something` an instance method `dupData` is
declared as well as a static method `dupData` which is preceded by the keyword
`static`. Though these method have the same name they are different. The instance
method is a property of `Something.protototype` whereas the static method is an
own property of `Something`. 

On line 18 the static method `dupData` is invoked on the `Something` class
returning the string `ByeBye` which is then logged to the console.

On line 19 `thing` an instance of `Something` is used to call the instance method
`dupData`. `dupData` accesses the current execution context with the keyword `this`,
which is the calling object `thing`, and returns the result of the expression 
`this.data + this.data` which is the string 'HelloHello'. Once 'HelloHello' is returned
it is logged to the console.
*/