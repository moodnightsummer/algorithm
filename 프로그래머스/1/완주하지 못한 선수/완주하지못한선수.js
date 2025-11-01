function solution(participant, completion) {
  let hashed = [];
  participant.forEach((entry) => {
    hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1;
  });

  completion.forEach((entry) => {
    hashed[entry] = hashed[entry] - 1;
  });

  console.log(hashed);

  for (var key in hashed) {
    if (hashed[key] >= 1) return key;
  }
}

solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
);
