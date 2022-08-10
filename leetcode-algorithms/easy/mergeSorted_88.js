// Time: O(n+m)
// Space: O(m)
// const merge = function (nums1, m, nums2, n) {
//   const nums1Copy = nums1.slice(0, m);

//   let i = 0;
//   let j = 0;

//   for (let k = 0; k < n + m; k++) {
//     if ((i < m && nums1Copy[i] < nums2[j]) || j >= n) {
//       nums1[k] = nums1Copy[i++];
//     } else {
//       nums1[k] = nums2[j++];
//     }
//   }

//   while (i < m && j < n) {
//     if (nums1Copy[i] > nums2[j]) {
//       nums1[k] = nums2[j];
//       j++;
//       k++;
//     } else {
//       nums1[k] = nums1Copy[i];
//       i++;
//       k++;
//     }
//   }

//   while (i < m) {
//     nums1[k] = nums1Copy[i];
//     i++;
//     k++;
//   }

//   while (j < n) {
//     nums1[k] = nums2[j];
//     j++;
//     k++;
//   }

//   return nums1;
// };

function merge(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;

  for (let k = m + n - 1; k >= 0; k--) {
    if (j < 0) break;
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i--];
    } else {
      nums1[k] = nums2[j--];
    }
  }

  return nums1;
}

// const merge = function (nums1, m, nums2, n) {
//   for (let i = 0; i < n; i++) {
//     nums1[i + m] = nums2[i];
//   }

//   quickSort(nums1, 0, nums1.length - 1);
//   return nums1;
// };

// function quickSort(list, start, end) {
//   if (start < end) {
//     pivot = partition(list, start, end);
//     quickSort(list, start, pivot - 1);
//     quickSort(list, pivot + 1, end);
//   }
//   return list;
// }

// function partition(list, start, end) {
//   const pivot = end;
//   let i = start - 1;

//   for (let j = start; j < end; j++) {
//     if (list[j] < list[pivot]) {
//       i++;
//       const temp = list[j];
//       list[j] = list[i];
//       list[i] = temp;
//     }
//   }

//   const temp = list[i + 1];
//   list[i + 1] = list[pivot];
//   list[pivot] = temp;
//   return i + 1;
// }

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
console.log(merge([0], 0, [1], 1));
console.log(merge([1], 1, [], 0));
console.log(merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5));
console.log(
  merge(
    [
      -10, -10, -9, -9, -9, -8, -8, -7, -7, -7, -6, -6, -6, -6, -6, -6, -6, -5,
      -5, -5, -4, -4, -4, -3, -3, -2, -2, -1, -1, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3,
      4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ],
    55,
    [
      -10, -10, -9, -9, -9, -9, -8, -8, -8, -8, -8, -7, -7, -7, -7, -7, -7, -7,
      -7, -6, -6, -6, -6, -5, -5, -5, -5, -5, -4, -4, -4, -4, -4, -3, -3, -3,
      -2, -2, -2, -2, -2, -2, -2, -1, -1, -1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2,
      2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6,
      6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9,
    ],
    99
  )
);
