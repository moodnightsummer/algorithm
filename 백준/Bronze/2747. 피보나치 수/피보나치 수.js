const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const n = Number(require("fs").readFileSync(filePath).toString());
const fibo = [];

for (let i = 0; i <= n; i++) {
  if (i < 2) {
    fibo[i] = i;
  } else {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
}
console.log(fibo);

console.log(fibo.pop());

// 재귀로 풀었는데 시간 초과 남
function fin(n) {
  if (n < 2) {
    return n;
  }

  return fin(n - 1) + fin(n - 2);
}

console.log(fin(n));
