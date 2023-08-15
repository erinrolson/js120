// factory function to create payments
function createPayment(services = {}) {
  return {
    internet : services.internet || 0,
    phone : services.phone || 0,
    amount : services.amount || 0,
    
    total : function() {
      return this.amount || this.phone + this.internet;
    }
  }

}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));
console.log(payments); // array of payment objects
console.log(paymentTotal(payments));      // => 24000