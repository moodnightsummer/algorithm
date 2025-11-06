function solution(arr) {
  const answer = arr
    .sort((a, b) => {
      return `${b}${a}` - `${a}${b}`;
    })
    .join("");

  return answer[0] === "0" ? "0" : answer;
}
