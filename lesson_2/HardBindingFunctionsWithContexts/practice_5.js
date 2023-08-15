// what is output?

let obj = {
  a: 'Amazebulous!',
};
let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj); // foo bound to obj

bar.call(otherObj); //Amazebulous! cannot override bind.