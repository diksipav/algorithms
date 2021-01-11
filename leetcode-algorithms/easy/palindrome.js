// Checks if number is palindrome.

const isPalindrome = function (x) {
  let copy = x;
  let digits = [];

  if (x < 0) return false;

  while (copy > 0) {
    digits.push(copy % 10);
    copy = Math.floor(copy / 10);
  }

  for (let i = 0; i < digits.length / 2; i++) {
    if (digits[i] !== digits[digits.length - i - 1]) return false;
  }

  return true;
};

// tests
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
