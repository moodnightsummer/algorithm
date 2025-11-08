function solution(clothes) {
  const temp = {};

  for (let i = 0; i < clothes.length; i++) {
    if (!temp[clothes[i][1]]) {
      temp[clothes[i][1]] = [];
    }
    temp[clothes[i][1]].push(temp[clothes[i][0]]);
  }

  let xCount = 1;
  for (const [key, value] of Object.entries(temp)) {
    xCount *= value.length + 1;
  }

  return xCount - 1;
}
