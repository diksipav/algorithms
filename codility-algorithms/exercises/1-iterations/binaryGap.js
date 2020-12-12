function solution(N) {
  const binaryRepresentation = getBinaryRepresentation(N);

  return getMaxBinaryGap(binaryRepresentation);
}

function getBinaryRepresentation(number) {
  let maxExponent = 0;
  let powerOf2 = 1;
  let binaryRepresentation = "";

  while (number >= powerOf2 * 2) {
    maxExponent += 1;
    powerOf2 = powerOf2 * 2;
  }

  let substraction = number;

  for (let i = maxExponent; i >= 0; i--) {
    if (substraction - 2 ** i >= 0) {
      substraction -= 2 ** i;
      binaryRepresentation = binaryRepresentation + "1";
    } else {
      binaryRepresentation = binaryRepresentation + "0";
    }
  }

  return binaryRepresentation;
}

function getMaxBinaryGap(binaryNumber) {
  let maxGap = 0;
  let counter;

  for (let i = 1; i < binaryNumber.length; i++) {
    if (binaryNumber[i] == 0 && binaryNumber[i - 1] == 1) {
      counter = 1;
    } else if (binaryNumber[i] == 0 && counter > 0) {
      counter += 1;
    } else if (binaryNumber[i] == 1 && counter > maxGap) {
      maxGap = counter;
    }
  }

  return maxGap;
}

// tests
console.log(solution(0));
console.log(solution(1));
console.log(solution(2));
console.log(solution(16));
console.log(solution(32));
console.log(solution(29));
console.log(solution(1041));

// function calculateBinary(N) {
//   let copy = N;
//   const binary = [];
//   let exponent = 0;

//   while (N > 2 ** exponent) {
//     exponent++;
//   }
//   if (N == 2 ** exponent) {
//     binary.push(1);
//     for (let i = 0; i < exponent; i++) {
//       binary.push(0);
//     }
//   } else {
//     for (let i = exponent - 1; i >= 0; i--) {
//       copy = copy - 2 ** i;
//       if (copy >= 0) {
//         binary.push(1);
//       } else {
//         binary.push(0);
//         copy = copy + 2 ** i;
//       }
//     }
//   }
//   return binary;
// }

// function solution(N) {
//   const binary = calculateBinary(N);
//   let countZeros = 0;
//   const zeros = [];
//   let prev = binary[0];

//   for (let i = 1; i < binary.length; i++) {
//     if (prev === 1 && binary[i] === 0) {
//       countZeros = 1;
//       prev = 0;
//     } else if (prev === 0 && binary[i] === 1) {
//       zeros.push(countZeros);
//       prev = 1;
//     } else if (prev === 0) {
//       countZeros++;
//     }
//   }

//   let maxZeros = 0;

//   zeros.forEach((elem) => {
//     if (elem > maxZeros) {
//       maxZeros = elem;
//     }
//   });
//   return maxZeros;
// }
