const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");
const length = Number(input.shift());
const a = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

const b = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let answer = 0;

for (let i = 0; i < length; i++) {
  answer += a[i] * b[i];
}

console.log(answer);
