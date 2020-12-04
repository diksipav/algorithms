const binarySearch = (list, x) => {
  let n = list.length;
  let end = n - 1;
  let start = 0;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (list[middle] === x) return middle;

    if (list[middle] <= x) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1; // === end
};

// tests
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
console.log(binarySearch([1, 3, 4, 5, 7, 8, 9, 11, 13, 14, 15], 4));
console.log(binarySearch([1, 3, 4, 5, 7, 8, 9, 11, 13, 14, 15], 15));
console.log(binarySearch([1, 3, 4, 5, 7, 8, 9, 11, 13, 14, 15], 9));
console.log(binarySearch([1, 3, 4, 5, 7, 8, 9, 11, 13, 14, 15], 1));
