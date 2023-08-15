function Vehicle(year) {
  this.year = year;
}

function Truck(year, bedType) {
  Vehicle.call(this, year);
  this.bedType = bedType;
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

function Car(year) {
  Vehicle.call(this, year);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

let truck1 = new Truck(2003, 'Short');
console.log(truck1.year);
console.log(truck1.bedType);