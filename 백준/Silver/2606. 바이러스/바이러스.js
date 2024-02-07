const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const computers = Number(input.shift());
const line = Number(input.shift());

const graph = Array(computers + 1)
  .fill()
  .map(() => []);

for (let i = 0; i < line; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

const visited = [];
let stack = [];
stack.push(1);
while (stack.length) {
  const node = stack.pop();
  if (!visited.includes(node)) {
    visited.push(node);
    stack = [...stack, ...graph[node]];
  }
}

console.log(visited.length - 1);
