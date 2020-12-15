var pattern = (n) => {
  let temp = "";
  let count = 0;
  for (i = 1; i <= n; i++) {
    temp = "";
    count = 0;
    for (j = 1; j <= 2 * n; j++) {
      if (j >= n - i + 1 && count < n) {
        temp += " * ";
        count += 1;
      } else {
        temp += "   ";
      }
    }
    console.log(temp);
  }
};

pattern(8);
