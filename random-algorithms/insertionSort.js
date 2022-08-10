/* Insertion Sort
   Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.
   It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.
   Efficient for (quite) small data sets, much like other quadratic sorting algorithms.
   More efficient in practice than most other simple quadratic algorithms such as selection sort or bubble sort.
   In-place.
   Stable.
 */

function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    let j = i;
    while (j >= 0 && list[j - 1] > list[j]) {
      swap(list, j, j - 1);
      j--;
    }
  }

  return list;
}

function swap(list, i, j) {
  const temp = list[i];
  list[i] = list[j];
  list[j] = temp;
}

console.log(insertionSort([3, 8, 1, 9, 2, 7, 6, 10, 4, 5]));
