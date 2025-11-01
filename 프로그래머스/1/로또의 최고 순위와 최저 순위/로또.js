function solution(lottos, win_nums) {
  const zeroCount = lottos.filter((item) => item === 0);
  const numbers = {};
  for (let i = 0; i < win_nums.length; i++) {
    numbers[win_nums[i]] = 0;
  }
  let result = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (numbers[lottos[i]] === 0) {
      result++;
    }
  }

  const rank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };

  return [rank[result + zeroCount.length], rank[result]];
}

console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
