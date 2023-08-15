/*
When the keyword `this` is used to access the execution context it is referencing
the global object. So `this.firstName` and `this.lastName` is attempting to 
access properties `firstName` and `lastName` on the global object, which returns
`undefined` as those were never set. `undefined` when used with the `+` operand
is coerced to `NaN` and `NaN` + `NaN` evaluates to `NaN` which is logged to the
console when `person.fullName` is passed as an argument to the console.log method.
*/

/*
NaN is logged to the console when the program is executed.
On line 7 the expression `person.fullName` is evaluated.
`fullName` is a property of the object referenced by the 
global variable `person` and the associated value is the expression  
this.firstName + this.lastName. When the expression is 
evaluated its execution context is the global object. 
JavaScript looks for the properties `firstName` and `lastName`
on the global object, and not finding them returns `undefined`
for both property access expressions. `undefined + undefined`
evaluates to NaN, which is then logged to the console.
*/