// modify the program so that we get the desired output

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func, contextObj) {
  let returnVal = func.call(contextObj); // use call to explicitly set context
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);