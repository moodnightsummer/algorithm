function solution(A, B) {
  var answer = 0;

  const sortA = A.sort((a, b) => a - b);
  const sortB = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer = answer + sortA[i] * sortB[i];
  }

  return answer;
}

solution([1, 4, 2], [4, 5, 4]);
