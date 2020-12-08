console.log('-----------Batchmates------------');

function mates(fn, ln, add) {
  this.first_name = fn;
  this.last_name = ln;
  this.address = add;
}

var p1 = new mates('udit', 'kumar', 'bokaro');
var p2 = new mates('rohan', 'kumar', 'asansol');
var p3 = new mates('sahil', 'raj', 'patna');

console.log(p1, p2, p3);

console.log('-----------Fill in the code 1------------');

var p1 = {
  firstName: 'Abhishek',
  lastName: 'Jain',
};

var p2 = {
  firstName: 'Aman',
  lastName: 'Vats',
};

function sayHi(greeting) {
  return greeting + ' ' + this.firstName + ' ' + this.lastName;
}

console.log(sayHi.call(p1, 'Hi'));
console.log(sayHi.call(p2, 'Hi'));

console.log('-----------Fill in the code 2------------');

var p1 = {
  firstName: 'Abhishek',
  lastName: 'Jain',
};

var p2 = {
  firstName: 'Aman',
  lastName: 'Vats',
};

function sayHi(greeting) {
  return greeting + ' ' + this.firstName + ' ' + this.lastName;
}

console.log(sayHi.apply(p1, ['Hi']));
console.log(sayHi.apply(p2, ['Hi']));

console.log('-----------Fill in the code 3------------');

var p1 = {
  firstName: 'Abhishek',
  lastName: 'Jain',
};

var p2 = {
  firstName: 'Aman',
  lastName: 'Vats',
};

function sayHi(greeting) {
  return greeting + ' ' + this.firstName + ' ' + this.lastName;
}

var newfunc = sayHi.bind(p1);
console.log(newfunc('Hi'));

var newfunc = sayHi.bind(p2);
console.log(newfunc('Hi'));
