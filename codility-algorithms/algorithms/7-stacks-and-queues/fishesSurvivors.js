function fishesSurvivors(A, B) {
  const N = A.length;
  let upstream = 0;
  let downstream = []; // stack

  if (!N) return 0;

  for (let i = 0; i < N; i++) {
    if (B[i] === 0) {
      while (downstream.length) {
        if (A[i] > downstream[downstream.length - 1]) {
          downstream.pop();
        } else {
          break;
        }
      }

      if (!downstream.length) {
        upstream++;
      }
    } else {
      downstream.push(A[i]);
    }
  }

  return upstream + downstream.length;
}

// tests
console.log(fishesSurvivors([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));
