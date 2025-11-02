function solution(numbers, commands) {
  const result = [];
  for (let i = 0; i < commands.length; i++) {
    const makeNumbers = [...numbers];

    let cutNumbers = makeNumbers.slice(commands[i][0] - 1, commands[i][1]);

    cutNumbers.sort((a, b) => a - b);
    result.push(cutNumbers[commands[i][2] - 1]);
  }
  return result;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
