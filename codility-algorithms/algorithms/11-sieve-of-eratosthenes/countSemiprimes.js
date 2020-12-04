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

      while (k <= N / 2) {
        sieve[k] = false;
        k += i;
      }
    }

    i++;
  }

  let primeNumbers = [];

  for (let i = 2; i <= N / 2; i++) {
    if (sieve[i]) primeNumbers.push(i);
  }

  return primeNumbers;
};

// const getSemiprimes = (left, right) => {
//   let primes = sieveOfEratosthenes(right); // O(N*loglogN)
//   let semiprimes = [];

//   for (let i = 0; i < primes.length; i++) { //O(N^2)
//     for (let j = i; j < primes.length; j++) {
//       if (left <= primes[i] * primes[j] && primes[i] * primes[j] <= right) {
//         semiprimes.push(primes[i] * primes[j]);
//       }
//     }
//   }

//   return semiprimes;
// };

// // O(M) * O(N^2)
// const countSemiprimes = (N, P, Q) => {
//   let M = P.length;

//   let semiprimes = [];

//   for (let i = 0; i < M; i++) {
//     semiprimes.push(getSemiprimes(P[i], Q[i]).length);
//   }

//   return semiprimes;
// };

/////////////////////////////////////////////////////////////////////
// const countSemiprimes = (N, P, Q) => {
//   let M = P.length;

//   semiprimesCounter = {};
//   isSemiprime = {};

//   let semiprimes = [];

//   for (let i = 0; i < M; i++) {
//     semiprimes.push(
//       semiprimesCounter(Q[i]).length - semiprimesCounter(P[i]).length
//     );
//     if (isSemiprime[P[i]]) semiprimes[i] = semiprimes[i] + 1;
//   }

//   return semiprimes;
// };

const getSemiprimes = (N) => {
  let primes = sieveOfEratosthenes(N); // O(N*loglogN)
  let semiprimes = {};

  let i = 0;

  while (primes[i]) {
    let j = 0;
    while (primes[i] * primes[j] <= N) {
      semiprimes[primes[i] * primes[j]] = true;
      j++;
    }
    i++;
  }

  return semiprimes;
};

const countSemiprimes = (N, P, Q) => {
  let M = P.length;

  isSemiprime = getSemiprimes(N + 1);
  semiprimes = Array(N).fill(0);

  for (let j = 1; j <= N; j++) {
    if (isSemiprime[j]) semiprimes[j] = semiprimes[j - 1] + 1;
    else semiprimes[j] = semiprimes[j - 1];
  }

  let result = [];

  for (let i = 0; i < M; i++) {
    let item = semiprimes[Q[i]] - semiprimes[P[i]];
    if (isSemiprime[P[i]]) item = item + 1;
    result.push(item);
  }

  return result;
};

// tests
console.log(countSemiprimes(26, [1, 4, 16], [26, 10, 20]));
