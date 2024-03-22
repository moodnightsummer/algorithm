const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split(" ");
const [a, b] = input.map(Number);
const max = a >= b ? a : b;

let result = 0;
const fibo = [];

for (let i = 0; i <= max; i++) {
  if (i < 2) {
    fibo[i] = i;
  } else {
    fibo[i] = fibo[i - 1] + fibo[i - 2];

    if (i >= a && i <= b) {
      result += fibo[i];
    }
  }
}

console.log(result);
