// what will the following code output?

let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(foo()); //NaN
console.log(bar()); //5