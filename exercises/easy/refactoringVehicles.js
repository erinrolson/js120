// Refactor these classes so they all use a common superclass, and inherit behavior
// as needed.
// class Vehicle {
//   constructor(make, model) {
//     this.make;
//     this.model;
//   }
  
//   getWheels() {
//     // polymorphic? what would be the best return here? just undefined?
//     // advantage of getWheels in superclass is there is a 'common' interface?
//     return null;
//   }
  
//   info() {
//     return `${this.make} ${this.model}`;
//   }
// }

// class Car extends Vehicle {
//   getWheels() {
//     return 4;
//   }
// }

// class Motorcycle extends Vehicle {
//   getWheels() {
//     return 2;
//   }
// }

// class Truck extends Vehicle {
//   constructor(make, model, payload) {
//     super(make, model);
//     this.payload = payload;
//   }

//   getWheels() {
//     return 6;
//   }
// }

// polymorphism example
// the interface for the class heirarchy lets us work with objects of 
// different types in the same way. 
// let vehicles = [new Vehicle('generic make','generic model'), 
//   new Car('toyota', 'prius'), new Motorcycle('honda', 'dirtbike'),
//   new Truck('dodge', 'ram')];
  
// vehicles.forEach(vehicle => console.log(vehicle.getWheels()));

//OLOO Pattern
// const VehiclePrototype = {
//   init(make, model) {
//     this.make = make;
//     this.model = model;
//     return this;
//   },
  
//   getWheels() {
//     return null;
//   },
  
//   info() {
//     return `${this.make} ${this.model}`;
//   },
// };

// const CarPrototype = Object.create(VehiclePrototype);
// add specifics to CarPrototype
// CarPrototype.getWheels = function() {
//   return 4;
// };

// const MotorcyclePrototype = Object.create(VehiclePrototype);
// add specifics to motorcycle prototype
// MotorcyclePrototype.getWheels = function() {
//   return 2;
// };

// const TruckPrototype = Object.create(VehiclePrototype);
// add specifics to truck prototype
// TruckPrototype.init = function(make, model, payload) {
//   VehiclePrototype.init.call(this, make, model);
//   this.payload = payload;
//   return this;
// };

// TruckPrototype.getWheels = function() {
//   return 6;
// };

// let vehicleInst = Object.create(VehiclePrototype).init('genericMake', 'genericModel');
// let carInst = Object.create(CarPrototype).init('toyota', 'prius');
// let motoInst = Object.create(MotorcyclePrototype).init('honda', 'dirtbike');
// let truckInst = Object.create(TruckPrototype).init('dodge', 'ram', 10000);

// console.log(vehicleInst.getWheels());
// console.log(carInst.getWheels());
// console.log(motoInst.getWheels());
// console.log(truckInst.payload);

// Pseudo-classical pattern
// function Vehicle(make, model) {
//   this.make = make;
//   this.model = model;
// };

// Vehicle.prototype.getWheels = function() {
//   return null;
// };

// Vehicle.prototype.info = function() {
//   return `${this.make} ${this.model}`;
// };

// // car
// function Car(make, model) {
//   Vehicle.call(this, make, model);
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// Car.prototype.getWheels = function() {
//   return 4;
// };

// // truck (different)
// function Truck(make, model, payload) {
//   Vehicle.call(this, make, model);
//   this.payload = payload;
// };

// Truck.prototype = Object.create(Vehicle.prototype);
// Truck.prototype.constructor = Truck;

// Truck.prototype.getWheels = function() {
//   return 6;
// };

// Factory Function
function Vehicle(make, model) {
  return {
    make,
    model,
    getWheels() {
      return null;
    },
    
    info() {
      return `${this.make} ${this.model}`;
    },
    
  };
};

function Car(make, model) {
  let carInst = Vehicle(make, model);
  carInst.getWheels = function() {
    return 4;
  };
  
  return carInst;
};

function Truck(make, model, payload) {
  let truckInst = Vehicle(make, model);
  truckInst.payload = payload;
  truckInst.getWheels = function() {
    return 6;
  };
  
  return truckInst;
};