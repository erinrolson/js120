// we need to extract getDescription from turk, but we always want it to execute
// with turk as its execution context. How would you do that?
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

// use bind to return a new function whose execution context perm set to turk.
let getTurkDesc = turk.getDescription.bind(turk); 
logReturnVal(getTurkDesc);