// // Fibonacci
// const calculateClimbOptions = (N, shift) => {
//   let options = Array(N + 1).fill(0);
//   options[0] = 1;
//   options[1] = 1;

//   for (let i = 2; i <= N; i++) {
//     options[i] = (options[i - 1] + options[i - 2]) & ((1 << shift) - 1);
//   }

//   return options;
// };

// // O(L + N), L=50000
// const ladder = (A, B) => {
//   const N = A.length;

//   let maxA = A[0];
//   let maxB = B[0];
//   for (let i = 0; i < N; i++) {
//     if (A[i] > maxA) maxA = A[i];
//     if (B[i] > maxB) maxB = B[i];
//   }

//   let counter = Array(N).fill(0);
//   let climbACounter = calculateClimbOptions(maxA, maxB);

//   for (let i = 0; i < N; i++) {
//     counter[i] = climbACounter[A[i]] & ((1 << B[i]) - 1);
//   }

//   return counter;
// };

// // tests
// console.log(ladder([50000, 4, 5, 5, 1], [3, 2, 4, 3, 1]));
