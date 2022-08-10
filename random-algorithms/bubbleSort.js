/* Bubble Sort
   In-place.
   Unstable.
 */

function bubbleSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        swap(list, j, j + 1);
      }
    }
  }

  return list;
}

function swap(list, i, j) {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}
console.log(bubbleSort([3, 8, 1, 9, 2, 7, 6, 10, 4, 5]));
