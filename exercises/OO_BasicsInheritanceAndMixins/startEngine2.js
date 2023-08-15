function Vehicle(year) {
  this.year = year;
}

Vehicle.prototype.startEngine = function() {
  return 'Ready to go!';
}

function Truck(year, bedType) {
  Vehicle.call(this, year);
  this.bedType = bedType;
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.startEngine = function(speed) {
  return Vehicle.prototype.startEngine() + ` Drive ${speed}, please!`;
}

function Car(year) {
  Vehicle.call(this, year);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

let truck1 = new Truck();
console.log(truck1.startEngine('fast'));

let truck2 = new Truck();
console.log(truck2.startEngine('slow'));