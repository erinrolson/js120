// what is logged to the console?

let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

console.log(foo.bind(obj)); // returns new function which obj permanently bound to 