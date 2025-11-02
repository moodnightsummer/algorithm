function solution(answers) {
  const students = {
    one: [1, 2, 3, 4, 5],
    two: [2, 1, 2, 3, 2, 4, 2, 5],
    three: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };

  const answer = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === students.one[i % students.one.length]) {
      answer[0] = answer[0] + 1;
    }

    if (answers[i] === students.two[i % students.two.length]) {
      answer[1] = answer[1] + 1;
    }

    if (answers[i] === students.three[i % students.three.length]) {
      answer[2] = answer[2] + 1;
    }
  }

  const max = Math.max(...answer);
  const result = [];

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === max) {
      result.push(i + 1);
    }
  }

  return result;
}

console.log(solution([1, 2, 3, 4, 5]));
