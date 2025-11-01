function solution(players, m, k) {
  let count = 0;
  let servers = Array(k).fill(0);

  for (let i = 0; i < players.length; i++) {
    servers.shift();
    const server = servers.reduce((acc, cur) => acc + cur, 0);

    const needServer = Math.floor(players[i] / m);

    if (needServer - server > 0) {
      servers.push(needServer - server);

      count = count + needServer - server;
    } else {
      servers.push(0);
    }
  }

  return count;
}

solution(
  [0, 2, 3, 3, 1, 2, 0, 0, 0, 0, 4, 2, 0, 6, 0, 4, 2, 13, 3, 5, 10, 0, 1, 5],
  3,
  5
);
