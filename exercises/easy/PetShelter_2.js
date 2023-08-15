//pseudo-classical implementation
function Pet(type, name) {
  this.type = type;
  this.name = name;
};

Pet.prototype.info = function()  {
  return `a ${this.type} named ${this.name}`;
}

function Owner(name) {
  this.name = name;
  this.pets = [];
};

Owner.prototype.numberOfPets = function() {
  return this.pets.length;
};

Owner.prototype.addPet = function(pet) {
  this.pets.push(pet);
}

Owner.prototype.printPets = function() {
  this.pets.forEach(pet => console.log(pet.info()));
}

function Shelter() {
  this.owners = [];
};

Shelter.prototype.adopt = function(owner, pet) {
  
  if (!this.owners.includes(owner)) {
    this.addOwner(owner);
  }
  
  owner.addPet(pet);
};

Shelter.prototype.printAdoptions = function() {
  this.owners.forEach(owner => {
    owner.printPets();
    console.log('');
  });
};

Shelter.prototype.addOwner = function(owner) {
  this.owners.push(owner);
}


let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);