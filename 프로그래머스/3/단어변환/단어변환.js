function solution(begin, target, words) {
  let answer = 0;
  let visited = [];

  let queue = [];

  queue.push([begin, answer]);

  // words에 target 단어가 없으면 도달 불가
  if (!words.includes(target)) return 0;

  while (queue.length) {
    let [cur, cnt] = queue.shift();

    // cur과 target이 같으면 while문 중단
    if (cur === target) return cnt;

    words.forEach((word) => {
      let isNotEqual = 0;

      if (visited.includes(word)) return; // 이미 방문했으면 방문 안 함

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== cur[i]) isNotEqual++;
      }

      if (isNotEqual === 1) {
        queue.push([word, ++cnt]);
        visited.push(word);
      }
    });
  }
  return answer;
}
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
