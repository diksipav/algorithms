// function dominator(A) {
//   if (!A.length) return -1;

//   let stack = [];

//   for (let i = 0; i < A.length; i++) {
//     if (!stack.length) {
//       stack.push(A[i]);
//     } else {
//       if (stack[stack.length - 1] !== A[i]) {
//         stack.pop();
//       } else {
//         stack.push(A[i]);
//       }
//     }
//   }

//   if (!stack.length) return -1;

//   const candidate = stack.pop();
//   let count = 0;
//   let index;

//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === candidate) {
//       count++;
//       index = i;
//     }
//   }

//   if (count > A.length / 2) return index;
//   return -1;
// }


// O(N)
function solution(A) {
  let N = A.length;
  let counter = {};

  for (let i = 0; i < N; i++) {
    if (counter[A[i]]) {
      counter[A[i]].push(i);
    } else {
      counter[A[i]] = [i];
    }
  }

  let values = Object.values(counter);

  for (let i = 0; i < values.length; i++) {
    if (values[i].length > Math.floor(N / 2)) {
      return values[i][0];
    }
  }

  return -1;
}

// tests
console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));
console.log(solution([]));
console.log(solution([0]));
console.log(solution([0, 3, 3]));
console.log(solution([1, 3, 1, 3]));
