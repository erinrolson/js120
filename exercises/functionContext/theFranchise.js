/*
On line 4 `[1,2,3]` is used to call `map`. `map` is an iterative array method
that takes a callback function as an argument and invokes the callback for every
element in the calling array. When the callback function is passed as an argument
to `map` it loses its intended execution context, the object assigned to the `franchise`
variable. Instead it has an implicit execution context of the global object. A good
mental model for envisioning this loss of intended execution context is to imagine
each invocation of the callback like so `callback(number)`, when written out such
as this it is easy to 'see' why the execution context is the global object. 

JavaScript's lexical scoping rules allow for variables declared in outer scopes
are accessible within inner scopes. 

If you want to leverage JavaScript's lexical scoping rules to resolve the issuse
a variable should be declared in the outer function definition and initialized
to `this`. This variable is then accessible to the callback function and can be
used to provided the intended execution context. 
*/

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

/*
This program demonstrates that when functions are passed as an argument to
function they can lose their intended execution context. Within the body of the
function passed as an argument to `map` the expression `this.name + ' ' + number`
is evaluated. However when the function is exucutec by `map`, it is executed with
the global object as its execution context. In order to resolve such an issue
we must provide an explicit execution context for the function, preserve the
execution context with a variable in the outer scope, provide an optional `thisArg`,
or use an arrow function for the inner function passed as an argument to `map`.
*/