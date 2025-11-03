function solution(n, lost, reserve) {
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);

  const realLost = lost.filter((x) => !reserve.includes(x));
  const restTraining = reserve.filter((x) => !lost.includes(x));

  let result = n - realLost.length;

  for (let i = 0; i < restTraining.length; i++) {
    if (result === n) break;

    if (realLost.includes(restTraining[i] - 1)) {
      result = result + 1;
      realLost[realLost.indexOf(restTraining[i] - 1)] = null;
    } else if (realLost.includes(restTraining[i] + 1)) {
      result = result + 1;
      realLost[realLost.indexOf(restTraining[i] + 1)] = null;
    }
  }

  return result;
}

console.log(solution(5, [2, 4], [3]));
