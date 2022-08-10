/* Quick Sort
   It picks an element as a pivot and partitions the given array around the picked pivot. 
   There are many different versions of quickSort that pick pivot in different ways. 
   Always pick the first element as a pivot.
   Always pick the last element as a pivot (implemented below)
   Pick a random element as a pivot.
   Pick median as the pivot.
   In-place.
   Stable.
 */

function quickSort(list) {
  if (list.length <= 1) return list;

  const pivot = list[list.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < list.length - 1; i++) {
    list[i] < pivot ? left.push(list[i]) : right.push(list[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([3, 8, 1, 9, 2, 7, 6, 10, 4, 5, 16, 12, 14, 13, 14, 15]));
