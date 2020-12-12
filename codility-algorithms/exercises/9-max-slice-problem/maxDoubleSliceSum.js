const maxSum = (list) => {
  if (list.length === 1) return 0;
  let maxEnding = list[0];
  let maxSlice = list[0];

  for (let i = 0; i < list.length - 1; i++) {
    maxEnding = maxEnding + list[i];
    maxSlice = Math.max(maxSlice, maxEnding);
  }

  return maxSlice;
};

// O(N^2)
const maxDoubleSliceSum = (list) => {
  let N = list.length;

  if (N === 3) return;

  let maxLeft = 0;
  let maxRight = maxSum(list.slice(2));

  for (let i = 2; i < N - 1; i++) {
    maxLeftTemp = maxSum(list.slice(0, i).reverse());
    maxRightTemp = maxSum(list.slice(i + 1));

    if (maxLeftTemp + maxRightTemp > maxLeft + maxRight) {
      maxLeft = maxLeftTemp;
      maxRight = maxRightTemp;
    }
  }

  return maxLeft + maxRight;
};

const maxDoubleSliceSumOptimized = (list) => {
  let N = list.length;
  let left = [];
  let right = [];

  for (let i = 0; i < N - 1; i++) {
    left.push(0);
    right.push(0);
  }

  for (let i = 2; i < N - 1; i++) {
    left[i] = Math.max(0, list[i - 1] + left[i - 1]);
  }
  left = left.slice(1);

  for (let i = N - 3; i > 0; i--) {
    right[i] = Math.max(0, list[i + 1] + right[i + 1]);
  }
  right = right.slice(1);
  let maxSum = left[0] + right[0];

  for (let i = 1; i < N - 2; i++) {
    if (left[i] + right[i] > maxSum) {
      maxSum = left[i] + right[i];
    }
  }

  return maxSum;
};

// tests
console.log(maxDoubleSliceSumOptimized([3, 2, 6, -1, 4, 5, -1, 2]));
console.log(maxDoubleSliceSumOptimized([3, 2, -6, 4, 1]));
console.log(maxDoubleSliceSum([-3, -4, -5, -1, -2]));
console.log(maxDoubleSliceSum([0, 10, -5, -2, 0]));
