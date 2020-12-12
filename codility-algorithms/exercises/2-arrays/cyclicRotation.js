// O(N*K) where N is length of A
function solution(A, K) {
  const length = A.length;

  if (!length) return [];

  const shiftedArray = [...A];

  for (let i = 0; i < K; i++) {
    let lastItem = shiftedArray[length - 1];
    for (let j = length - 1; j > 0; j--) {
      shiftedArray[j] = shiftedArray[j - 1];
    }
    shiftedArray[0] = lastItem;
  }

  return shiftedArray;
}

//tests
console.log(solution([], 1));
console.log(solution([0, 0, 0], 1));
console.log(solution([1, 2, 3, 4], 4));
console.log(solution([3, 8, 9, 7, 6], 3));
