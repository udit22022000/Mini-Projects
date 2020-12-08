function Item(name, price) {
  this.name = name;
  this.price = price;
}

function Mobile(name, price) {
  Item.call(this, name, price);
  this.category = 'mobile';
}

function Laptop(name, price) {
  Item.call(this, name, price);
  this.category = 'laptop';
}

function Television(name, price) {
  Item.call(this, name, price);
  this.category = 'television';
}

var phone = new Mobile('Oneplus', 30000);
var lappy = new Laptop('Macbook', 170000);
var tv = new Television('LG', 40000);

console.log(phone);
console.log(lappy);
console.log(tv);
