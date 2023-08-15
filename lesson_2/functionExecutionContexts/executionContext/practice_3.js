message = 'Hello from the global scope!'; // not declared will be property of global

function deliverMessage() {
  console.log(this.message);
}

deliverMessage(); // logs 'Hello from the global scope' as message property of global

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage; // prop deliverMessage added to foo init to func

foo.deliverMessage(); // logs hello from the function scope