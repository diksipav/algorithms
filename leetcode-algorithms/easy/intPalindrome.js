var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  if (x < 10) return true;

  let reversed = 0;
  let original = x;

  while (original > reversed) {
    reversed = reversed * 10 + (original % 10);
    original = Math.floor(original / 10);
  }

  return original === reversed || Math.floor(reversed / 10) === original;
};

console.log(isPalindrome(200));
console.log(isPalindrome(121));
console.log(isPalindrome(122));
console.log(isPalindrome(123));
console.log(isPalindrome(123321));
console.log(isPalindrome(12321));
console.log(isPalindrome(11));
console.log(isPalindrome(6));
