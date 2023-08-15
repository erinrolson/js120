const towMixin = {
  tow() {
    console.log('I can tow a trailer');
  }
};

function Vehicle(year) {
  this.year = year;
}

function Truck(year) {
  Vehicle.call(this, year);
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

Object.assign(Truck.prototype, towMixin);

function Car(year) {
  Vehicle.call(this, year);
  
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

let truck = new Truck(2002);
console.log(truck.year);
console.log(truck.tow());

let car = new Car(2015);
console.log(car.year);