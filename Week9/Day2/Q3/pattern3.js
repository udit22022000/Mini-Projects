var pattern = (n) => {
  let temp = "";
  let start = n,
    end = n;
  for (i = 1; i < 2 * n; i++) {
    temp = "";
    for (j = 1; j < 2 * n; j++) {
      if (j >= start && j <= end) {
        temp += "* ";
      } else {
        temp += "  ";
      }
    }
    if (i < n) {
      start -= 1;
      end += 1;
    } else {
      start += 1;
      end -= 1;
    }
    console.log(temp);
  }
};

pattern(4);
