var arr = [1, 2, 3, 4, 5];
arr.forEach((ele) => {
  console.log(ele ** 2);
});
//1 4 9 16 25

var arr = [1, 2, 3, 4, 5];
result = arr.map((ele) => {
  return ele ** 2;
});

console.log(result); // [1,4,9,16,25]

var arr = [1, 2, 3, 4, 5];
result = arr.filter((ele) => {
  return ele % 2 == 0;
});

console.log(result); //[2,4]

var arr = [1, 2, 3, 4, 5];
result = arr.reduce((comp, ele) => {
  return comp + ele;
}, 0);

console.log(result); //15
