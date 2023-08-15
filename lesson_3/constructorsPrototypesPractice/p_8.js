function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last); // if not invoked property do it for them
  } 
  
  this.name = `${first} ${last}`; // otherwise normal path
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe