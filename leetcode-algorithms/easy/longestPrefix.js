// function longestPrefix(strs) {
//   let longest = strs[0];
//   if (!longest) return longest;

//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(longest) !== 0) {
//       longest = longest.slice(0, longest.length - 1);
//       if (longest === "") return longest;
//     }
//   }
//   return longest;
// }

function longestPrefix(strs) {
  if (strs.length === 1) return strs[0];

  const mid = Math.floor(strs.length / 2);

  const left = longestPrefix(strs.slice(0, mid));
  const right = longestPrefix(strs.slice(mid));
  return longestBetween2(left, right);
}

function longestBetween2(left, right) {
  let common = "";

  for (let i = 0; i < left.length; i++) {
    if (right[i] === left[i]) common += left[i];
    else return common;
  }

  return common;
}

console.log(longestPrefix(["flower", "flow", "floight", "flos", "floooo"]));
console.log(longestPrefix(["dog", "racecar", "car"]));
console.log(longestPrefix(["", ""]));
console.log(longestPrefix(["aaa", "aab"]));
console.log(longestPrefix(["flower", "flower", "flower"]));
console.log(longestPrefix(["c", "acc", "ccc"]));

// console.log(longestBetween2("flower", "flo"));
// console.log(longestBetween2("flower", "flower"));
// console.log(longestBetween2("", "ww"));
