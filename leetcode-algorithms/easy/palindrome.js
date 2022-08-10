// Checks if number is palindrome.

// const isPalindrome = function (x) {
//   let copy = x;
//   let digits = [];

//   if (x < 0) return false;

//   while (copy > 0) {
//     digits.push(copy % 10);
//     copy = Math.floor(copy / 10);
//   }

//   for (let i = 0; i < digits.length / 2; i++) {
//     if (digits[i] !== digits[digits.length - i - 1]) return false;
//   }

//   return true;
// };

// // tests
// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(10));
// console.log(isPalindrome(-101));

// const isPalindrome = function (head) {
//   if (!head.next) return true;

//   let elem = head;
//   let elements = [];

//   while (elem) {
//     elements.push(elem.val);
//     elem = elem.next;
//   }

//   const length = elements.length;
//   const half = Math.ceil(length / 2);

//   for (let i = 0; i < half; i++) {
//     if (elements[i] != elements[length - i - 1]) return false;
//   }

//   return true;
// };

// let front;

// function recursiveCheck(node) {
//   if (node !== null) {
//     if (!recursiveCheck(node.next)) return false;
//     if (node.val !== front.val) return false;
//     front = front.next;
//   }
//   return true;
// }

// const isPalindrome = function (head) {
//   if (!head.next) return true;

//   front = head;

//   return recursiveCheck(head);
// };

function isPalindrome(head) {
  if (!head.next) return true;

  let length = 0;
  let current = head;
  while (current) {
    length++;
    current = current.next;
  }

  const half = Math.ceil(length / 2);

  let index = 0;
  current = head;
  while (index < half) {
    index++;
    current = current.next;
  }
}

console.log(isPalindrome({ val: 1, next: { val: 2, next: null } }));
console.log(isPalindrome({ val: 1, next: null }));
console.log(
  isPalindrome({ val: 1, next: { val: 2, next: { val: 1, next: null } } })
);
