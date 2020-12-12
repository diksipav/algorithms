// O(N) where N is length of A
function solution(A) {
  let valuesCounter = {}; // array also can be used for counter

  for (let i = 0; i < A.length; i++) {
    if (valuesCounter[A[i]]) {
      valuesCounter[A[i]] += 1;
    } else {
      valuesCounter[A[i]] = 1;
    }
  }

  for (const key in valuesCounter) {
    if (valuesCounter[key] % 2 == 1) return parseInt(key);
  }
}

// test
console.log(solution([9, 3, 9, 3, 9, 7, 9]));
