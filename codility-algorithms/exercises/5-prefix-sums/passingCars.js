function solution(A) {
  let counter = 0;
  let sum = 0;

  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] === 0) {
      sum += counter;
    } else {
      counter += 1;
    }
  }

  return sum > 1000000000 ? -1 : sum;
}

// tests
console.log(solution([0, 1, 0, 1, 1]));
console.log(solution([0]));
console.log(solution([1]));
console.log(solution([0, 1]));
console.log(solution([1, 0]));
