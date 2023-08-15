//console.log("Hello");
// 'Hello'.__proto__ -> String.prototype -> {constructor : String} -> String.name
console.log(Object.getPrototypeOf('hello').constructor.name);
console.log([1,2,3].__proto__.constructor.name);
console.log({name: 'Srdjan'}.__proto__.constructor.name);
