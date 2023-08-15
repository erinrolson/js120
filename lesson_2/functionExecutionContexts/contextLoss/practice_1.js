let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);

// 1) function passed as an argument to logRetrunVal and param func init to arg val
// 2) func (local variable) is invoked w/ global context and return val is assigned
//    to returnVal. 
// 3) returnVal = 'undefined undefined is a undefined.'
// 4) returnVal logged to console. 
/*
The desired output was "Christopher Turk is a Surgeon".
The actual output was "undefined undefined is a undefined.".
How do you explain this difference?
- on line 16 the function object associated with the method getDescription
  is passed as an argument to logReturnVal. within the body of logReturnVal the
  function object, now assigned to parameter func is invoked w/ the global object
  as its execution context. because the global object doesn't have the properties
  referenced using this in the function body, they return undefined. 
*/