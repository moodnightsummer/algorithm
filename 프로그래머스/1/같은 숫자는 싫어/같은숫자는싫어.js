function solution(numbers) {
  const result = [numbers[0]];
  for (let i = 1; i < numbers.length; i++) {
    if (result[result.length - 1] !== numbers[i]) {
      result.push(numbers[i]);
    }
  }

  return result;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
