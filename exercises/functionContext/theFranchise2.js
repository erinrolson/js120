/*
The same problem can be solved by hard-binding the execution context of the 
anonomous function by using the anonomous function to call `bind` and passing 
`this` as the argument. 

Alternatively, an arrow function expression could be passed as an argument to map.
Because arrow functions execution context is dependent on the execution 
state at the time the function was defined.
*/

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    }.bind(this));
  },
};