// Factory Function Pattern

function createCar(make, model, year) { // <--- no way to inspect and identity the 'type' of object returned
  return {
    make,
    model,
    year,
    started : false,
    
    start() { // <--- every object created has a copy of the method. 
      this.started = true;
    },
    
    stop() {
      this.started = false;
    },
  }
}

let prius = createCar('Toyota', 'Prius', 2010);
let forester = createCar('Subaru', 'Forester', 2018);

// Constructor Function 

function Car(make, model, year) { // <-- capitalize name of constructor
  this.make = make; // <-- function parameters match property names
  this.model = model; // <-- this keyword used to set properties
  this.year = year;
  this.started = false;
}

// by putting methods on the prototype object we delegate methods to the prototype
Car.prototype.start = function () {
  this.started;
};

Car.prototype.stop = function () {
  this.stop;
};

let rav4 = new Car('Toyota', 'Rav4', 2020); // <-- must be invoked with new keyword
//let corolla = Car('Toyota', 'Corolla', 1999) // <-- returns undefined

console.log(Object.getPrototypeOf(rav4).constructor.name);
//console.log(corolla instanceof Car); // <--- typeError cannot access properties of undefined