// function removeELement(nums, val) {
//   let i = 0;

//   for (let j = 0; j < nums.length; j++) {
//     if (nums[j] !== val) {
//       nums[i] = nums[j];
//       i++;
//     }
//   }

//   return nums;
// }

function removeELement(nums, val) {
  let i = nums.length - 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    if (nums[j] === val) {
      nums[j] = nums[i];
      i--;
    }
  }

  return nums;
}

console.log(removeELement([3, 2, 2, 3], 3));
console.log(removeELement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeELement([2, 2], 2));
