const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const [goalX, goalY] = [N - 1, M - 1];
const maze = input.map((value) => {
  return value.split("").map(Number);
});

const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];

const queue = [];
queue.push([0, 0, 1]);

const bfs = () => {
  while (queue.length) {
    const [X, Y, move] = queue.shift();
    if (X === goalX && Y === goalY) return move;

    for (let i = 0; i < 4; i++) {
      const moveX = X + dx[i];
      const moveY = Y + dy[i];

      if (
        moveX >= 0 &&
        moveX < N &&
        moveY >= 0 &&
        moveY < M &&
        maze[moveX][moveY] === 1
      ) {
        queue.push([moveX, moveY, move + 1]);
        // 방문 처리
        maze[moveX][moveY] = 0;
      }
    }
  }
};

console.log(bfs());
