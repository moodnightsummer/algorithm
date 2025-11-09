function solution(genres, plays) {
  const answer = [];
  let genresHash = genres.map((item, idx) => {
    return { genres: item, index: idx, play: plays[idx] };
  });

  genresHash.sort((a, b) => {
    a.play - b.play;
  });

  const playCountObj = {};
  for (let i = 0; i < genres.length; i++) {
    playCountObj[genres[i]] = playCountObj[genres[i]]
      ? playCountObj[genres[i]] + plays[i]
      : plays[i];
  }

  let keyValueArr = Object.entries(playCountObj);
  keyValueArr.sort((a, b) => b[1] - a[1]);

  keyValueArr.forEach((item, index) => {
    let current = [];
    for (let i = 0; i < genresHash.length; i++) {
      if (item[0] === genresHash[i].genres) {
        current.push(genresHash[i]);
      }
    }

    current.sort((a, b) => b.play - a.play);

    current.forEach((genres, idx) => {
      if (idx < 2) {
        answer.push(genres.index);
      }
    });
  });

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
