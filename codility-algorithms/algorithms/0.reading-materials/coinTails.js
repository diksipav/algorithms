// On tail will be every coin that is turned odd number of times.
// That is every number that has odd number of divisors.
// Odd number of divisors has only number that is square of other value.
const coinTailsGold = (coins) => {
  return Math.floor(Math.sqrt(coins.length));
};

const coinTails = (coins) => {
  let counter = [];
  let result = 0;

  for (let i = 0; i <= coins.length; i++) {
    counter.push(0);
  }

  for (let i = 1; i < coins.length; i++) {
    let k = i;
    while (k < coins.length) {
      counter[k] = (counter[k] + 1) % 2;
      k = k + i;
    }

    result = result + counter[i];
  }
  return result;
};

// tests
console.log(coinTails([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
