function calculateBinary(N) {
  let copy = N;
  const binary = [];
  let exponent = 0;

  while (N > 2 ** exponent) {
    exponent++;
  }
  if (N == 2 ** exponent) {
    binary.push(1);
    for (let i = 0; i < exponent; i++) {
      binary.push(0);
    }
  } else {
    for (let i = exponent - 1; i >= 0; i--) {
      copy = copy - 2 ** i;
      if (copy >= 0) {
        binary.push(1);
      } else {
        binary.push(0);
        copy = copy + 2 ** i;
      }
    }
  }
  return binary;
}

function solution(N) {
  const binary = calculateBinary(N);
  console.log(binary);
  let countZeros = 0;
  const zeros = [];
  let prev = binary[0];

  for (let i = 1; i < binary.length; i++) {
    if (prev === 1 && binary[i] === 0) {
      countZeros = 1;
      prev = 0;
    } else if (prev === 0 && binary[i] === 1) {
      zeros.push(countZeros);
      prev = 1;
    } else if (prev === 0) {
      countZeros++;
    }
  }

  const maxZeros = 0;

  zeros.forEach((elem) => {
    if (elem > maxZeros) {
      maxZeros = elem;
    }
  });
  return maxZeros;
}

console.log(solution(32));
