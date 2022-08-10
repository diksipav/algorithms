/* Selection Sort
   In-place.
   Unstable.
 */

function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let min_idx = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[min_idx] > list[j]) {
        min_idx = j;
      }
    }

    if (min_idx !== i) {
      swap(list, min_idx, i);
    }
  }

  return list;
}

function swap(list, i, j) {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

console.log(selectionSort([3, 8, 1, 9, 2, 7, 6, 10, 4, 5]));
