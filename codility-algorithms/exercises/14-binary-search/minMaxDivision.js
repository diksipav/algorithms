// const sum = (list) => {
//   let sum = 0;
//   for (let i = 0; i < list.length; i++) {
//     sum = sum + list[i];
//   }
//   return sum;
// };

// const maxElement = (list) => {
//   let max = list[0];

//   for (let i = 1; i < list.length; i++) {
//     if (list[i] > max) max = list[i];
//   }

//   return max;
// };

// const isValidSum = (A, blocks_cnt, sumToCheck) => {
//   let blockCounter = 1;
//   let sum = 0;

//   for (let i = 0; i < A.length; i++) {
//     if (blockCounter > blocks_cnt) return false;

//     if (sum + A[i] > sumToCheck) {
//       sum = A[i];
//       blockCounter += 1;
//     } else {
//       sum += A[i];
//     }
//   }

//   return blockCounter <= blocks_cnt;
// };

// const minMaxDivision = (K, A) => {
//   let upperBound = sum(A);
//   let lowerBound = maxElement(A);

//   while (lowerBound <= upperBound) {
//     let middle = Math.floor((upperBound + lowerBound) / 2);

//     if (isValidSum(A, K, middle)) {
//       upperBound = middle - 1;
//     } else {
//       lowerBound = middle + 1;
//     }
//   }

//   return lowerBound;
// };

// // tests
// console.log(minMaxDivision(3, [2, 1, 5, 1, 2, 2, 2]));
