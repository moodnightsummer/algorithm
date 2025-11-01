function solution(people, limit) {
  let result = 0;

  const sortPeople = people.sort((a, b) => a - b);

  while (sortPeople.length !== 0) {
    if (sortPeople[0] + sortPeople[sortPeople.length - 1] <= limit) {
      result++;
      sortPeople.pop();
      sortPeople.shift();
    } else {
      result++;
      sortPeople.pop();
    }
  }

  return result;
}

solution([100, 50, 30, 80], 100);
