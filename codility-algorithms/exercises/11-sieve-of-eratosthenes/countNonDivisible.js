// O(N^2)
const countNonDivisible = (list) => {
  let N = list.length;
  let nonDivisors = []; // N elements

  for (let i = 0; i < N; i++) {
    let counter = [];
    for (let j = 0; j < N; j++) {
      if (i !== j) {
        if (list[i] % list[j] !== 0) counter.push(list[j]);
      }
    }

    nonDivisors.push(counter.length);
  }

  return nonDivisors;
};

const countDivisors = (N) => {
  if (N === 1) return [1];

  let divisors = [];

  let i = 1;

  while (i * i < N) {
    if (N % i === 0) divisors.push(i, N / i);
    i++;
  }

  if (i * i === N) divisors.push(i);

  return divisors;
};

// O(N*logN)
const countNonDivisibleOptimized = (list) => {
  let N = list.length;
  let nonDivisors = [];
  let counter = {};

  for (let i = 0; i < N; i++) {
    if (counter[list[i]]) {
      counter[list[i]] += 1;
    } else {
      counter[list[i]] = 1;
    }
  }

  let divisors = {};

  for (let i = 0; i < N; i++) {
    divisors[i] = countDivisors(list[i]);
  }

  for (let i = 0; i < N; i++) {
    let divisorsCount = 0;
    divisors[i].forEach((divisor) => {
      divisorsCount += counter[divisor] ? counter[divisor] : 0;
    });
    nonDivisors.push(N - divisorsCount);
  }

  return nonDivisors;
};

// tests
console.log(countNonDivisible([3, 1, 2, 3, 6]));
console.log(countNonDivisibleOptimized([3, 1, 2, 3, 6]));
console.log(countNonDivisibleOptimized([2]));
console.log(countNonDivisibleOptimized([2, 4]));
