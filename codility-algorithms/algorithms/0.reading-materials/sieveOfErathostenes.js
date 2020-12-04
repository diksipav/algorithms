const sieveOfEratosthenes = (N) => {
  let sieve = [];

  for (let i = 0; i <= N; i++) {
    sieve.push(true);
  }
  sieve[0] = false;
  sieve[1] = false;

  let i = 2;

  while (i * i < N) {
    if (sieve[i]) {
      let k = i * i;

      while (k <= N) {
        sieve[k] = false;
        k += i;
      }
    }

    i++;
  }

  let primeNumbers = [];

  for (let i = 2; i <= N; i++) {
    if (sieve[i]) primeNumbers.push(i);
  }

  return primeNumbers;
};

// tests
console.log(sieveOfEratosthenes([30]));
