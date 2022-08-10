// var romanToInt = function (s) {
//   let mapping = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//     IV: 4,
//     IX: 9,
//     XL: 40,
//     XC: 90,
//     CD: 500,
//     CM: 900,
//   };

//   let sum = 0;
//   let i = 0;

//   while (i < s.length) {
//     let two = s[i] + s[i + 1];
//     if (mapping[two]) {
//       sum += mapping[two];
//       i = i + 2;
//     } else {
//       sum += mapping[s[i]];
//       i++;
//     }
//   }

//   return sum;
// };

var romanToInt = function (s) {
  let mapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = mapping[s[s.length - 1]];

  for (let i = s.length - 2; i >= 0; i--) {
    if (mapping[s[i]] < mapping[s[i + 1]]) {
      sum -= mapping[s[i]];
    } else {
      sum += mapping[s[i]];
    }
  }

  return sum;
};

console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
