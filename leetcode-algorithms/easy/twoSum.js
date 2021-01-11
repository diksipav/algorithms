// Given the array with numbers and target number, returns the indices of 2 numbers that sum up to the target.

const twoSum = function (nums, target) {
  let numbers = {};

  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];

    if (numbers[needed] >= 0) {
      return [i, numbers[needed]];
    } else {
      numbers[nums[i]] = i;
    }
  }
};

// tests
console.log(twoSum([2, 7, 11, 15], 9));

// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
