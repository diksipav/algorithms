// Recursive implementation 
const fibonnaciRecursive = (N) => {
  if (N < 2) return 1;

  return fibonnaciRecursive(N - 1) + fibonnaciRecursive(N - 2);
};

// Dynamic approach with caching previous values
const fibonnaciDynamic = () => {
  let results = {};
  results[0] = 1;
  results[1] = 1;

  let calculateFibonnaci = (n) => {
    if (results[n]) return results[n];

    let resultsKeys = Object.keys(results).map((key) => parseInt(key));
    let resultsMaxKey = Math.max(...resultsKeys);

    for (let i = resultsMaxKey + 1; i <= n; i++) {
      results[i] = results[i - 1] + results[i - 2];
    }

    return results[n];
  };

  console.log(calculateFibonnaci(9));
  console.log(calculateFibonnaci(12));
};

// tests
console.log(fibonnaciRecursive(5));
console.log(fibonnaciDynamic());
