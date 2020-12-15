const pattern = (n) => {
  let row = "";
  for (i = 1; i <= n; i++) {
    row = "";
    for (j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
};

pattern(10);
