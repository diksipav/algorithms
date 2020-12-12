const getFibonacciSequence = (N) => {
  let sequence = [];
  sequence[0] = 0;
  sequence[1] = 1;

  for (let i = 2; i <= 26; i++) {
    // 121393
    sequence[i] = sequence[i - 1] + sequence[i - 2];
    if (sequence[i] > N) break;
  }

  return sequence;
};

const fibonacciFrogg = (leaves) => {
  let distance = leaves.length + 1;

  let fibonacciSequence = getFibonacciSequence(distance);

  let minJumpsCounter = Array(distance).fill(-1);

  for (let i = 0; i < fibonacciSequence.length; i++) {
    if (fibonacciSequence[i] === distance) {
      minJumpsCounter[leaves.length] = 1;
      break;
    }

    if (leaves[fibonacciSequence[i] - 1]) {
      minJumpsCounter[fibonacciSequence[i] - 1] = 1;
    }
  }

  if (minJumpsCounter[leaves.length] === 1) return 1;

  for (let i = 0; i < distance; i++) {
    if (leaves[i] === 0 || minJumpsCounter[i] > -1) continue;

    if (leaves[i] === 1 || i === leaves.length) {
      let minJumps = distance;

      for (let j = 2; j < fibonacciSequence.length; j++) {
        let jump = fibonacciSequence[j];

        let prev_index = i - jump;
        if (prev_index < 0) break;

        if (minJumpsCounter[prev_index] > 0) {
          minJumps = Math.min(minJumps, minJumpsCounter[prev_index] + 1);
          minJumpsCounter[i] = minJumps;
        }
      }
    }
  }

  return minJumpsCounter[leaves.length];
};

const fibonacciFroggg = (leaves) => {
  let distance = leaves.length + 1;

  let fibonacciSequence = getFibonacciSequence(distance);

  let minJumpsCounter = Array(distance).fill(-1);

  for (let i = 0; i < fibonacciSequence.length; i++) {
    if (fibonacciSequence[i] === distance) {
      minJumpsCounter[leaves.length] = 1;
      break;
    }

    if (leaves[fibonacciSequence[i] - 1]) {
      minJumpsCounter[fibonacciSequence[i] - 1] = 1;
    }
  }

  if (minJumpsCounter[leaves.length] === 1) return 1;

  for (let i = 0; i < distance; i++) {
    if (leaves[i] === 0 || minJumpsCounter[i] > -1) continue;

    if (leaves[i] === 1 || i === leaves.length) {
      let minJumps = distance;

      for (let j = fibonacciSequence.length - 1; j > 1; j--) {
        let jump = fibonacciSequence[j];

        let prev_index = i - jump;
        if (prev_index < 0) continue;

        if (minJumpsCounter[prev_index] > 0) {
          minJumps = Math.min(minJumps, minJumpsCounter[prev_index] + 1);
          minJumpsCounter[i] = minJumps;
        }
      }
    }
  }

  return minJumpsCounter[leaves.length];
};

const fibonacciFrog = (leaves) => {
  let distance = leaves.length + 1;

  let fibonacciSequence = getFibonacciSequence(distance);

  let minJumpsCounter = Array(distance);

  for (let i = 0; i < distance; i++) {
    if (leaves[i] === 0 && i < distance - 1) continue;

    let minJumps = distance;
    for (let j = fibonacciSequence.length - 1; j > 1; j--) {
      let jump = fibonacciSequence[j];

      let prev_index = i - jump;

      if (prev_index < -1) continue;

      if (prev_index === -1) {
        minJumpsCounter[i] = 1;
        break;
      } else if (minJumpsCounter[prev_index] > 0) {
        minJumps = Math.min(minJumps, minJumpsCounter[prev_index] + 1);
        minJumpsCounter[i] = minJumps;
      }
    }
  }

  return minJumpsCounter[leaves.length] || -1;
};

// tests
console.log(fibonacciFrogg([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]));
console.log(fibonacciFrog([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]));
console.log(fibonacciFroggg([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]));
