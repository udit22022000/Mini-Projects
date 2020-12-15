var pattern = (n) => {
  let temp = "";
  for (i = 0; i < n; i++) {
    temp = "";
    for (j = 0; j < n; j++) {
      if (j >= n - i - 1) {
        if (j == n - i - 1) {
          temp += " *";
        } else {
          temp += " * *";
        }
      } else {
        temp += "    ";
      }
    }
    console.log(temp);
  }
};

pattern(5);
