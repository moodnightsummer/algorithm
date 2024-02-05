function solution(maps) {
  // 위 아래로 얼마큼 움직여야 하는지
  const yLen = maps.length;
  const xLen = maps[0].length;
  // 도착 지점의 좌표 = goal
  const goalY = yLen - 1;
  const goalX = xLen - 1;
  // 상하로 움직이기 위한 배열
  const dy = [0, 0, 1, -1];
  // 좌우로 움직이기 위한 배열
  const dx = [-1, 1, 0, 0];

  // 움직임을 확인하기 위한 배열
  const queue = [];
  // 0, 0 좌표를 시작으로 1 먼저 삽입
  queue.push([0, 0, 1]);

  while (queue.length) {
    const [curY, curX, move] = queue.shift();
    if (curY === goalY && curX === goalX) return move;

    for (let i = 0; i < 4; i++) {
      // 상하 좌우 탐색을 위한 값
      const ny = curY + dy[i];
      const nx = curX + dx[i];

      if (ny >= 0 && ny < yLen && nx >= 0 && nx < xLen && maps[ny][nx] === 1) {
        queue.push([ny, nx, move + 1]);
        // 방문한 노드 0으로 변경해서 다시 방문하지 않도록 수정
        maps[ny][nx] = 0;
      }
    }
  }
  return -1;
}
