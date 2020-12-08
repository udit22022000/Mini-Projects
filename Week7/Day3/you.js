var num = Math.round(Math.random() * 100);

var count = 1;
var a = setInterval(function () {
  console.log(num + ' x ' + count + ' = ' + num * count);
  count += 1;
  if (count == 11) {
    clearInterval(a);
  }
}, 1000);
