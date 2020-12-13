// const chocolateByNumbers = (N, M) => {
//   let eaten = {};
//   let i = 0;
//   let counter = 0;

//   while (!eaten[i]) {
//     eaten[i] = true;
//     counter++;
//     i = (i + M) % N;
//   }

//   return counter;
// };

// function calculateGCD(a, b) {
//   if (a % b === 0) return b;

//   return calculateGCD(b, a % b);
// }

// // LCM = a*b/GCD
// const chocolateByNumbersOptimized = (N, M) => {
//   let gcd = calculateGCD(N, M);
//   let lcm = (N * M) / gcd;

//   return lcm / M;
// };

// // tests
// console.log(chocolateByNumbersOptimized(10, 4));
