function solution(id_list, report, k) {
  const out = [];
  const answer = [];

  id_list.forEach((element) => {
    out[element] = 0;
    answer[element] = 0;
  });

  report.reduce((add, cur) => add !== cur);

  const set = [...new Set(report)];

  set.map((item) => {
    out[item.split(" ")[1]] = out[item.split(" ")[1]] + 1;
  });

  set.map((item) => {
    const [reportingUser, reportedUser] = [
      item.split(" ")[0],
      item.split(" ")[1],
    ];
    if (out[reportedUser] >= k) {
      answer[reportingUser]++;
    }
  });

  const answerArray = [];

  for (let i = 0; i < id_list.length; i++) {
    answerArray.push(answer[id_list[i]]);
  }

  return answerArray;
}

solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);
