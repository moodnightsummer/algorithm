function solution(n, computers) {
  let answer = 0;
  let visited = new Array(n).fill(false);

  for (let i = 0; i < computers.length; i++) {
    if (visited[i]) continue;

    dfs(i);
    answer++;
  }

  function dfs(node) {
    visited[node] = true;

    for (let i = 0; i < computers.length; i++) {
      if (computers[node][i] && !visited[i]) {
        dfs(i);
      }
    }
  }

  return answer;
}
