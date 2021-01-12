// Given a 32-bit signed integer, reverse digits of an integer and keeps the sign.

const reverse = function (x) {
  const positive = x > 0 ? true : false;
  let absNumber = Math.abs(x);

  let reversedNumber = 0;

  while (absNumber / 10 > 0) {
    reversedNumber = reversedNumber * 10 + (absNumber % 10);
    absNumber = Math.floor(absNumber / 10);
  }

  if (reversedNumber > 2 ** 31 - 1) return 0;

  return positive ? reversedNumber : -reversedNumber;
};

// tests
console.log(reverse(1234));
console.log(reverse(-1234));

// const reverse = function (x) {
//   const digits = [];
//   const positive = x > 0 ? true : false;

//   let absNumber = Math.abs(x);

//   while (absNumber / 10 > 0) {
//     digits.push(absNumber % 10);
//     absNumber = Math.floor(absNumber / 10);
//   }

//   let reversedNumber = 0;
//   for (let i = 0; i < digits.length; i++) {
//     reversedNumber = reversedNumber * 10 + digits[i];
//   }

//   if (reversedNumber > 2 ** 31 - 1) return 0;

//   return positive ? reversedNumber : -reversedNumber;
// };

// const reverse = function (x) {
//   const sign = x < 0 ? -1 : +1;
//   const digits = x.toString().split("");
//   digits.reverse();

//   const reversedPositiveNumber = parseInt(digits.join(""));

//   if (reversedPositiveNumber > 2147483647) return 0;

//   return sign > 0 ? reversedPositiveNumber : -reversedPositiveNumber;
// };
