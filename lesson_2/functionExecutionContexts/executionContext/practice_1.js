// what will the following output?

function func() {
  return this;
}

let context = func();

console.log(context);

/*
this is bound to global object 
*/