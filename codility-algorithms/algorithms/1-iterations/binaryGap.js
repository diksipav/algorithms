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
console.log(solution(29));
console.log(solution(1041));
