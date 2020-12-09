function Person(fn, ln, by) {
  this.first_name = fn;
  this.last_name = ln;
  this.birth_year = by;
}

Person.prototype.calculateAge = function () {
  return 2020 - this.birth_year;
};

var p1 = new Person("Udit", "Kumar", 2000);
var age = p1.calculateAge();

console.log(p1);
console.log(age);
