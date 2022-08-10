// Given the array with numbers and target number, returns the indices of 2 numbers that sum up to the target.

// const twoSum = function (nums, target) {
//   let numbers = {};

//   for (let i = 0; i < nums.length; i++) {
//     let needed = target - nums[i];

//     if (numbers[needed] >= 0) {
//       return [i, numbers[needed]];
//     } else {
//       numbers[nums[i]] = i;
//     }
//   }
// };

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) return [i, j];
//     }
//   }
// };

// var twoSum = function (nums, target) {
//   let map = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (map[nums[i]]) {
//       map[nums[i]].push(i);
//     } else map[nums[i]] = [i];
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (target !== 2 * nums[i] && map[target - nums[i]])
//       return [i, map[target - nums[i]][0]];
//     else if (target === 2 * nums[i] && map[target - nums[i]].length === 2)
//       return map[target - nums[i]];
//   }
// };

var twoSum = function (nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];

    if (map[needed] !== undefined && map[needed] !== i) {
      return [i, map[needed]];
    } else {
      map[nums[i]] = i;
    }
  }
};

// tests
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([1, 3, 4, 2], 6));
console.log(twoSum([1, 3, 3, 2], 6));

// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
