function main() {
  var fireCount = 0;
  var start = new Date();
  var timer = setInterval(function () {
    if (new Date() - start > 1000) {
      clearInterval(timer);
      var count_arr = localStorage.getItem("count_arr");
      if (count_arr == null) {
        count_arr = [];
      } else {
        count_arr = JSON.parse(count_arr);
      }
      count_arr.push(fireCount);
      localStorage.setItem("count_arr", JSON.stringify(count_arr));
      return;
    }
    fireCount++;
  }, 0);
}

var times = 0;
while (times < 5) {
  main();
  times += 1;
}

var count = localStorage.getItem("count_arr");
count = JSON.parse(count);

var firecount_total = 0;
for (var i = 0; i < count.length; i++) {
  firecount_total += count[i];
}
var fire_avg = firecount_total / 5;

document.getElementById(
  "fire_count"
).innerHTML += `average of the fireCount is <b>${fire_avg}</b>`;
