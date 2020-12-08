function identify(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

function getAvg(color) {
  var avg = (color.r + color.g + color.b) / 3;
  return avg;
}
var red = new identify(255, 0, 0);
var green = new identify(0, 255, 0);
var blue = new identify(0, 0, 255);
var black = new identify(0, 0, 0);
var white = new identify(255, 255, 255);

console.log(
  'Red',
  '(' + red.r + ',' + red.g + ',' + red.b + ')',
  'Average:' + getAvg(red)
);

console.log(
  'Green',
  '(' + green.r + ',' + green.g + ',' + green.b + ')',
  'Average:' + getAvg(green)
);

console.log(
  'Blue',
  '(' + blue.r + ',' + blue.g + ',' + blue.b + ')',
  'Average:' + getAvg(blue)
);

console.log(
  'Black',
  '(' + black.r + ',' + black.g + ',' + black.b + ')',
  'Average:' + getAvg(black)
);

console.log(
  'White',
  '(' + white.r + ',' + white.g + ',' + white.b + ')',
  'Average:' + getAvg(white)
);
