const swapElements = (A, B, m) => {
  let sumA = 0;
  let sumB = 0;
  const counterA = [];

  for (let i = 0; i < m; i++) {
    counterA.push[0];
  }

  for (let i = 0; i < A.length; i++) {
    sumA += A[i];

    if (counterA[A[i]]) {
      counterA[A[i]] += 1;
    } else {
      counterA[A[i]] = 1;
    }
  }

  for (let i = 0; i < B.length; i++) {
    sumB += B[i];
  }

  const halfDiff = (sumB - sumA) / 2;

  for (let i = 0; i < B.length; i++) {
    if (
      B[i] - halfDiff <= m &&
      B[i] - halfDiff >= 0 &&
      counterA[B[i] - halfDiff] > 0
    ) {
      return true;
    }
  }

  return false;
};

// tests
console.log(swapElements([1, 2, 2, 3, 9, 8], [1, 4, 10, 2, 3, 9], 10));
