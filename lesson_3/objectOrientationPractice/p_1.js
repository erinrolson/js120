let scissors = createProcuct(0, 'Scissors', 8, 10);

let drill = createProcuct(1,'Cordless Drill', 15, 45);


function createProcuct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,
    
    setPrice : function(price) {
      if (price < 0) {
        console.log('Cannot set negative price value.');
        return;
      }
      
      this.price = price;
    },
    
    describeProduct : function() {
      console.log(`=> Name: ${this.name}`);
      console.log(`=> ID: ${this.id}`);
      console.log(`=> Price: ${this.price}`);
      console.log(`=> Stock: ${this.stock}`);
    }
  }
}

console.log(scissors);
console.log(drill);

