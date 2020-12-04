const countFactors = (n) => {
  let counter = 0;

  let i = 1;

  while (i * i < n) {
    if (n % i === 0) {
      counter += 2;
    }
    i++;
  }

  if (i * i === n) {
    counter++;
  }

  return counter;
};

// tests
console.log(countFactors(24));
