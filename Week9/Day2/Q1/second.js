console.log("-------------Example-1---------");
const p1 = {
  bootcamp: "Masai",
  batch: "Titans",
  random: function () {
    console.log(this);
  },
};

p1.random(); //p1

console.log("-------------Example-2-----------");

const p2 = {
  bootcamp: "Masai",
  batch: "Titans",
  random: () => {
    console.log(this);
  },
};

p2.random(); //undefined

console.log("-------------Example-3-----------");

const p3 = {
  bootcamp: "Masai",
  batch: "Titans",
  random: function () {
    return function () {
      console.log(this);
    };
  },
};

p3.random()(); //global

console.log("-------------Example-4-----------");

const p4 = {
  bootcamp: "Masai",
  batch: "Titans",
  random: () => {
    return () => {
      console.log(this);
    };
  },
};

p4.random()(); //global

console.log("-------------Example-5-----------");

const p5 = {
  bootcamp: "Masai",
  batch: "Titans",
  random: () => {
    return function () {
      console.log(this);
    };
  },
};

p5.random()(); //undefined

console.log("-------------Example-6-----------");

const p6 = {
  bootcamp: "Masai",
  batch: "Titans",
  random: function () {
    return () => {
      console.log(this);
    };
  },
};

p6.random()(); //p6
