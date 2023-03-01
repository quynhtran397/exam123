function numberOneTriangle(n) {
  if (!Number.isInteger(n) || n < 1 || n > 10) {
    console.log("Error: Input must be an integer between 1 and 10");
    return;
  }
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}


numberOneTriangle(9)