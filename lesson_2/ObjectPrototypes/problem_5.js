// consider the following two loops:

//If foo is an arbitrary object, will these loops always log the same results to
//the console? Explain why they do or do not. If they don't always log the same 
//information, show an example of when the results differ.
let bar = { key1 : '1' , key2 : '2'};
let foo = { key3 : '3' };
let baz = { test : 'double dip' };

Object.setPrototypeOf(bar, baz);
Object.setPrototypeOf(foo, bar); 


// loop 1 
console.log('Loop 1:')
for (let property in foo) {
  console.log(`${property}: ${foo[property]}`);
}

// loop 2 
console.log('\n');
console.log('Loop 2: ')
Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

/*
loop 1 uses a for/in loop to iterate over the properites of foo, this includes
the properties of foo's prototype.

loop 2 passes `foo` as an argument to `Object.keys`, which returns an array of 
`foo`s own property values and then iterates over the property values of the array.

The two loops could have varying results as loop 1 will iterate over the properties
of its prototype and loop 2 will only ever iterate over the objects own properties. 
*/