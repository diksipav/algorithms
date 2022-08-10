// var lengthOfLastWord = function (s) {
//   let trimmed = s.trim();

//   const splitted = trimmed.split(" ");
//   return splitted[splitted.length - 1].length;
// };

var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};

// var lengthOfLastWord = function (s) {
//   let i = s.length;
//   let length = 0;

//   while (i > 0) {
//     i--;
//     if (s[i] !== " ") length++;
//     else if (length > 0) {
//       return length;
//     }
//   }

//   return length;
// };

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
