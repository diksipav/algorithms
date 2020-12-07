function solution(A) {
  let N = A.length;

  // left and right arrays are of length N - 1, since we don't need the sum of the whole array never
  const left = [A[0]];
  const right = [A[N - 1]];
  let minDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 1; i < N - 1; i++) {
    left[i] = left[i - 1] + A[i];
    right[i] = right[i - 1] + A[N - 1 - i];
  }

  for (let i = 0; i < N - 1; i++) {
    const diff = Math.abs(left[i] - right[N - 2 - i]);

    if (diff < minDiff) {
      minDiff = diff;
    }
  }

  return minDiff;
}

// tests
console.log(solution([3, 1, 2, 4, 3]));
console.log(solution([3, 5]));
console.log(solution([-3, 1, -2, -8, 3]));
