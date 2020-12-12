// const storeLine = (list) => {
//   let zeroCounter = 0;
//   let people = 0;

//   for (let i = 0; i < list.length; i++) {
//     if (list[i] === 0) {
//       zeroCounter++;
//     } else {
//       if (!zeroCounter) {
//         people++;
//       } else {
//         zeroCounter--;
//       }
//     }
//   }

//   return people;
//};

const storeLine = (list) => {
  let zeroCounter = 0;
  let people = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === 0) {
      zeroCounter++;
    } else {
      zeroCounter--;
      people = Math.max(people, -zeroCounter);
    }
  }

  return people;
};

//tests
console.log(storeLine([0, 0, 1, 0, 1, 1, 0, 1]));
console.log(storeLine([1, 1, 1, 0, 1, 1, 0, 1]));
