// O (N)
function solution(A) {
  const counter = {};

  A.forEach((elem) => {
    if (counter[elem]) {
      counter[elem] += 1;
    } else {
      counter[elem] = 1;
    }
  });

  return Object.keys(counter).length;
}

// tests
console.log(solution([2, 1, 1, 2, 3, 1]));
console.log(solution([1, 1, 1, 1, 1]));
console.log(solution([]));
