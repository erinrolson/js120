class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
  
  info() {
    return `a ${this.species} named ${this.name}`;
  }
}

class Owner {
  constructor (name) {
    this.name = name;
    this.pets = []; // array of collaborator objects
  }
  
  numberOfPets() {
    return this.pets.length;
  }
  
  displayPets() {
    // log all of the pets to the console??
    console.log(`\n${this.name} has adopted the following pets:`);
    
    this.pets.forEach( pet => {
      console.log(pet.info());
    });
  }
  
  adoptPet(pet) {
    this.pets.push(pet);
  }
}

class Shelter {
  constructor() {
    this.adoptors = [];
  }
  
  adopt(owner, pet) {
    this.registerAdoptor(owner);
    owner.adoptPet(pet); // adds pet to the owner pet array.. 
  }
  
  registerAdoptor(adoptor) {
    if (!this.adoptors.includes(adoptor)) {
      this.adoptors.push(adoptor); // add new adoptor to array 
    }
  }
  
  printAdoptions() {
    this.adoptors.forEach(newOwner => {
      newOwner.displayPets();
    });
  }
}


// write the classes and methods that will be necessary to make this code run
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

// log the following output
// P Hanson has adopted the following pets:
// a cat named Butterscotch
// a cat named Pudding
// a bearded dragon named Darwin

// B Holmes has adopted the following pets:
// a dog named Molly
// a parakeet named Sweetie Pie
// a dog named Kennedy
// a fish named Chester

// P Hanson has 3 adopted pets.
// B Holmes has 4 adopted pets.