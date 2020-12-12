// O(NlogN)
// sort the array and retrun max product after sorting
function solution(A) {
  const N = A.length;
  const sorted = mergeSort(A);

  if (
    sorted[N - 1] < 0 &&
    sorted[0] > 0 &&
    sorted[N - 1] * sorted[N - 2] > sorted[1] * sorted[2]
  ) {
    return sorted[0] * sorted[N - 1] * sorted[N - 2];
  } else {
    return sorted[0] * sorted[1] * sorted[2];
  }
}

// tests
console.log(solution([-3, 1, 2, -2, 5, 6]));
console.log(solution([-3, -1, -2, -2, 5, -6]));
console.log(solution([-3, 1, 2]));
console.log(solution([-5, -6, -4, -7, -10]));
console.log(solution([4, 7, 3, 2, 1, -3, -5]));

function mergeSort(list) {
  if (list.length <= 1) return list;

  const half = Math.ceil(list.length / 2);

  const left = mergeSort(list.slice(0, half));
  const right = mergeSort(list.slice(half));

  return merge2Arrays(left, right);
}

function merge2Arrays(left, right) {
  const merged = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  merged.push(...left.slice(i), ...right.slice(j));

  return merged;
}
