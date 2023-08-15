/*
A grocery store uses a JavaScript function to calculate discounts on various items.
They are testing out various percentage discounts but are getting unexpected results.
Go over the code, and identify the reason why they aren't getting the expected
discounted prices from the function.

Then, modify the code so that it produces the correct results.
*/

/*
The original solution was reassigning the value associated with the 
object's price property on each invocation of the discount method.
Rather the dicount method only needs to return the value of the discount
given a percentage value, which is what I have modified the method to do.
*/

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    //this.price -= discount;
    
    return this.price - discount;
  },
};


console.log(item.discount(20));
console.log(item.discount(50));
console.log(item.discount(25));