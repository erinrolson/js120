// output of following code and why?
function Ninja() {
  this.swung = true;
//prototype : {} <-- ninja is given reference to this empty object when created
}

let ninja = new Ninja();
// ninja = {swung : true, [[prototype]] : {} (Ninja.prototype obj) }

// reassigned to new object....
Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword()); // function doesn't exist???

/*
Ninja.prototype is assigned to a new object on line 11 which contains the 
swingSword method. However, ninja has the original reference to the empty object
it was assigned when created. 
*/