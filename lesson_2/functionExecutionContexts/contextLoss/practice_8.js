let foo = {
  a: 0,
  incrementA: function() {
    let increment = () => this.a += 1;
    // function increment() {
    //   this.a += 1;
    // }

    increment(); // arrow function always has the execution context of whatever it
                 // was defined within. 
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a);