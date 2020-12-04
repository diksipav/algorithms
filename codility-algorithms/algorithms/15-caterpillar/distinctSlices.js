function solution(M, A) {
  let slice = Array(M + 1).fill(false);
  let counter = 0;
  let front = 0;
  let back = 0;

  while (front < A.length) {
    if (back != A.length && slice[A[back]] == false) {
      slice[A[back]] = true;
      ++back;
    } else {
      console.log("eto", back - front);
      counter += back - front;
      //   if (res > 1000000000) {
      //     return 1000000000;
      //   }
      slice[A[front]] = false;
      ++front;
    }
  }

  return counter < 1000000000 ? counter : 1000000000;
}
// tests
//console.log(solution(6, [3, 4, 5, 5, 2]));
console.log(solution(6, [3, 5, 3, 2]));
//console.log(solution(6, [1, 1]));
