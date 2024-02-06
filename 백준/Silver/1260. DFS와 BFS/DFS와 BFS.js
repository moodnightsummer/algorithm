const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

function dfs(start, graph) {
  const visited = [];
  let stack = [];
  // 스택으로 구현
  stack.push(start);
  while (stack.length) {
    const now = stack.pop();
    if (!visited.includes(now)) {
      visited.push(now);
      // 기존 스택에 남아 있는 node 무시하면 에러 발생
      stack = [...stack, ...graph[now]];
    }
  }
  return visited;
}

function bfs(start, graph) {
  const visited = [];
  const queue = [];
  // 큐로 구현
  queue.push(start);
  while (queue.length) {
    const now = queue.shift();
    if (!visited.includes(now)) {
      visited.push(now);
      const sortGraph = graph[now].slice().sort((a, b) => a - b);

      for (let j = 0; j < sortGraph.length; j++) {
        if (!visited.includes(sortGraph[j])) {
          queue.push(sortGraph[j]);
        }
      }
    }
  }
  return visited;
}

const [N, M, V] = input.shift().split(" ").map(Number);
const graph = [...Array(N + 1)].map(() => []);

for (let i = 0; i < M; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

graph.map((value) => value.sort((a, b) => b - a));

console.log(dfs(V, graph).join(" "));
console.log(bfs(V, graph).join(" "));
