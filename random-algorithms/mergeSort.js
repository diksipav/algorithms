/* Merge Sort
   Divide & conquer.
   Not in-place.
   Stable.
 */

function mergeSort(list) {
  if (list.length < 2) return list;

  const half = Math.ceil(list.length / 2);

  const left = mergeSort(list.slice(0, half));
  const right = mergeSort(list.slice(half));

  return merge(left, right);
}

function merge(list1, list2) {
  let i = 0;
  let j = 0;

  const list = [];

  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      list.push(list1[i]);
      i++;
    } else {
      list.push(list2[j]);
      j++;
    }
  }

  if (i < list1.length) {
    list.push(...list1.slice(i));
  }

  if (j < list2.length) {
    list.push(...list2.slice(j));
  }

  return list;
}

console.log(mergeSort([3, 8, 1, 9, 2, 7, 6, 10, 4, 5, 11, 16, 13, 15, 12, 14]));
