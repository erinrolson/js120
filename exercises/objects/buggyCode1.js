/*
within the method `greet` the undeclared variables `morning`, `afternoon`,
`evening` and `name` are attempted to be accessed and interpolated into a template
literal. The developer likely intended for the method to access the object assigned 
to `helloVictor`s own properties by the same name, however to do this the `this`
keyword must be used to reference the execution context of the method call and
access the corresponding property values. 
*/

/*
Within the body of the greet method lines 11, 14, 17 attempt to access
variables `morning`, `name`, `afternoon`, `evening`, however none of 
these variable have been declared. Instead the current execution context's
properties by the same identifiers should be used instead by preceding all
the identifiers with `this.`. With this change when the `greet` method is 
invoked on an instance the current execution context's properties `morning`,
`name`, `afternoon`, `evening` will be accessed and their associated
values interpolated into the string. 
*/