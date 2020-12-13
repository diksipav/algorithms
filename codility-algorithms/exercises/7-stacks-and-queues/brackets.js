// const { timeLog } = require("console");

// function brackets(sentence) {
//   let elements = sentence.split("");
//   let pairs = {
//     "{": "}",
//     "[": "]",
//     "(": ")",
//   };
//   let temp = []; // stack

//   for (let i = 0; i < elements.length; i++) {
//     if (Object.keys(pairs).includes(elements[i])) {
//       temp.push(elements[i]);
//     } else {
//       if (elements[i] === pairs[temp[temp.length - 1]]) {
//         temp.pop();
//       } else {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// // tests
// console.log(brackets("{[()()]}"));
// console.log(brackets("([)()]"));
