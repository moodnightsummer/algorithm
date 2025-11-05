function solution(prices) {
  const result = [];

  for (let i = 0; i < prices.length; i++) {
    let second = 0;

    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        second++;
      } else if (prices[i] > prices[j]) {
        second++;
        break;
      }
    }
    result.push(second);
  }

  return result;
}

console.log(solution([1, 2, 3, 2, 3]));
