// context loss when a method is copied out of an object and used elsewhere

// Ex: 1
// const obj = {
//   name: 'John',
//   sayName: function() {
//     console.log(this.name);
//     console.log(this);
//   }
// }
// setTimeout(obj.sayName, 1000); // this will log "undefined"

/*
1) a reference to the function object associated with the sayName property
   of obj is passed as an argument to setTimeout(). The function has now lost its
   intended context (obj) and the context is the global object. 
*/

// LS: Method copied from object
// Ex: 1
// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings() {
//     console.log('hello, ' + this.firstName + ' ' + this.lastName);
//   },
// };

// john.greetings();         // context is john
// let foo = john.greetings; // Strips context
// foo();                    // context is now the global object

// EX: 2
// function repeatThreeTimes(func, contextObject) {
//   func.call(contextObject); // can't use func.call(john); john is out of scope
//   func.call(contextObject); // instead define param that will pass object to provide context
//   func.call(contextObject); // use function method call to invoke function w/ context
// }

// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };

//   repeatThreeTimes(john.greetings, john); // Strips context `this` is global
// }

// foo();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined

// Ex: 3
// It isn't always possible to  pass an object to provide context for a function
// in this case we must use another approach, bind. Bind is a function method that
// takes a context object as an argument and returns a new function which is
// essentially a copy of the caller w/ its context permanently bound to the provided
// context object. 

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings.bind(john)); // passing a bound function provides context.
}

foo();

// => hello, John Doe
// => hello, John Doe
// => hello, John Doe

