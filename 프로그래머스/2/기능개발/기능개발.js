function solution(progresses, speeds) {
  const workDays = progresses.map((x, index) => {
    return Math.ceil((100 - x) / speeds[index]);
  });

  const result = [];
  let maxDay = workDays[0];
  let count = 1;

  for (let i = 1; i < workDays.length; i++) {
    if (workDays[i] <= maxDay) {
      count++;
    } else {
      result.push(count);
      count = 1;
      maxDay = workDays[i];
    }
  }

  result.push(count);
  return result;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
