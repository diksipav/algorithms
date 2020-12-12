const maxProfit = (stocks) => {
  let minValue = stocks[0];
  let maxGain = 0;

  for (let i = 1; i < stocks.length; i++) {
    minValue = Math.min(minValue, stocks[i]);
    maxGain = Math.max(maxGain, stocks[i] - minValue);
  }

  return maxGain;
};

// tests
console.log(maxProfit([23171, 21011, 21123, 21366, 21013, 21367]));
