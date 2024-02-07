const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");
const people = Number(input.shift());
const [one, two] = input.shift().split(" ").map(Number);

const length = Number(input.shift());

// DFS를 위한 그래프
const graph = Array(people + 1)
  .fill()
  .map(() => []);

for (let i = 0; i < length; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

const visited = Array(people + 1).fill(false);

function dfs(start, target) {
  let stack = [[start, 0]];
  // 스택에 값이 없을 때까지 반복
  while (stack.length) {
    const [node, depth] = stack.pop();

    if (node === target) {
      return depth;
    }
    for (const i of graph[node]) {
      if (!visited[i]) {
        visited[i] = true;
        stack.push([i, depth + 1]);
      }
    }
  }
  return -1;
}

console.log(dfs(one, two));
