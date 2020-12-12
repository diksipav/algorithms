const calculateMinDivisors = (N) => {
  let minDivisors = [];

  for (let i = 0; i <= N; i++) {
    minDivisors[i] = 0;
  }

  minDivisors[0] = 1;
  minDivisors[1] = 1;

  let i = 2;

  while (i * i <= N) {
    if (!minDivisors[i]) {
      let k = i * i;

      while (k <= N) {
        if (!minDivisors[k]) {
          minDivisors[k] = i;
        }

        k = k + i;
      }
    }
    i++;
  }

  for (let i = 0; i <= N; i++) {
    if (minDivisors[i] === 0) minDivisors[i] = i;
  }

  return minDivisors;
};

const factorization = (N) => {
  let minDivisors = calculateMinDivisors(N);
  console.log(minDivisors);
  let primeFactors = [];
  let i = N;

  while (i > 1) {
    primeFactors.push(minDivisors[i]);

    if (minDivisors[i] === N) {
      return primeFactors;
    }

    i = i / minDivisors[i];
  }

  return primeFactors;
};

// tests
console.log(factorization(20));
