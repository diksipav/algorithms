function solution(A) {
  const counter = new Array(A.length + 2).fill(0);

  A.forEach((elem) => (counter[elem] += 1));

  for (let i = 1; i < counter.length; i++) {
    if (!counter[i]) return i;
  }
}

// tests
console.log(solution([2, 3, 1, 5]));
console.log(solution([]));
console.log(solution([5]));
console.log(solution([1]));
