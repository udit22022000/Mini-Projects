var pattern = (num) => {
  let temp = "";
  let n = Math.ceil(num / 2);
  let start = n,
    end = n;
  for (i = 1; i <= num; i++) {
    temp = "";
    for (j = 1; j <= num; j++) {
      if (j > start && j < end) {
        temp += "  ";
      } else {
        temp += "* ";
      }
    }
    if (num % 2 == 0 && i == num / 2) {
    } else {
      if (i < n) {
        start -= 1;
        end += 1;
      } else {
        start += 1;
        end -= 1;
      }
    }
    console.log(temp);
  }
};

pattern(9);
