// O(N)
function solution(A) {
  const counter = {};
  let max = A[0];

  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) max = A[i];

    if (counter[A[i]]) {
      return 0;
    } else {
      counter[A[i]] = 1;
    }
  }

  return Object.keys(counter).length == max ? 1 : 0;
}

// tests
console.log(solution([4, 1, 3, 2]));
console.log(solution([4, 1, 3]));
console.log(solution([1]));
console.log(solution([2]));
console.log(solution([1, 1]));
console.log(solution([1, 2]));
