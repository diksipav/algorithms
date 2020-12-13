// // num is middle + 1, nut index, but numbers of nails
// function checkNailsCount(a, b, c, num) {
//   let pNails = new Array(2 * c.length + 1).fill(0);

//   for (let i = 0; i < num; ++i) {
//     ++pNails[c[i]];
//   }

//   for (let i = 1; i < pNails.length; ++i) {
//     pNails[i] += pNails[i - 1];
//   }

//   for (let i = 0; i < a.length; ++i) {
//     if (pNails[b[i]] <= pNails[a[i] - 1]) return false;
//   }

//   return true;
// }

// const nailingPlanks = (A, B, C) => {
//   let lowerBound = 0;
//   let upperBound = C.length - 1;
//   let result = -1;

//   while (lowerBound <= upperBound) {
//     let middle = Math.floor((lowerBound + upperBound) / 2);

//     if (checkNailsCount(A, B, C, middle+1)) {
//       upperBound = middle - 1;
//       result = middle + 1;
//     } else {
//       lowerBound = middle + 1;
//     }
//   }

//   return result;
// };

// tests
console.log(nailingPlanks([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]));
console.log(nailingPlanks([2], [2], [2]));
console.log(nailingPlanks([1, 4, 5, 8], [4, 5, 9, 10], [10, 6, 4, 7, 2]));
console.log(
  nailingPlanks(
    [1, 2, 3, 4, 8, 9, 100],
    [2, 2, 3, 4, 8, 9, 100],
    [2, 9, 10, 3, 8, 4, 1, 99, 29, 100]
  )
);
console.log(nailingPlanks([3, 4, 5, 8], [4, 5, 9, 10], [1, 2, 3, 5, 8]));
console.log(nailingPlanks([1, 3, 4], [4, 6, 5], [1, 2, 3, 5]));
console.log(
  nailingPlanks(
    [1, 18, 3, 4, 8, 9, 2],
    [1, 18, 3, 4, 8, 9, 2],
    [2, 9, 10, 11, 3, 8, 4, 1, 18]
  )
);
