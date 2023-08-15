const towMixin = {
  tow() {
    console.log('I can tow a trailer');
  }
};

function Truck() {
  
}

Object.assign(Truck.prototype, towMixin);

function Car() {
  
}

let truck = new Truck();
truck.tow();