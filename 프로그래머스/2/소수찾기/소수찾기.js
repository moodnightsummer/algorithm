function solution(number) {
  const numbers = makeNumbers(number.split(""));
  const formattedNumber = [...new Set(numbers.map((item) => Number(item)))];

  let count = 0;

  for (let i = 0; i < formattedNumber.length; i++) {
    const isAnswer = isPrime(formattedNumber[i]);

    if (isAnswer) {
      count++;
    }
  }

  return count;
}

function makeNumbers(numbers) {
  const result = new Set();

  numbers.forEach((fixed, i, arr) => {
    // 필터로 현재 i 자리의 값은 빼 줌
    const rest = arr.filter((_, arrayIndex) => i !== arrayIndex);

    const combination = makeNumbers(rest);
    result.add(fixed);
    combination.forEach((item) => result.add(fixed + item));
  });
  return [...result];
}

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i * i < num + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

solution("17");
