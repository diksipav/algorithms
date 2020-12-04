function equiLeaders(A) {
  function findLeader(A) {
    if (!A.length) return -1;

    let stack = [];

    for (let i = 0; i < A.length; i++) {
      if (!stack.length) {
        stack.push(A[i]);
      } else {
        if (stack[stack.length - 1] !== A[i]) {
          stack.pop();
        } else {
          stack.push(A[i]);
        }
      }
    }

    if (!stack.length) return {};

    const candidate = stack.pop();
    let count = 0;
    let index;

    for (let i = 0; i < A.length; i++) {
      if (A[i] === candidate) {
        count++;
        index = i;
      }
    }

    if (count > A.length / 2) return { count, value: candidate };
    return {};
  }

  const leader = findLeader(A);

  if (leader !== {}) {
    const { count, value } = leader;
    let counter = 0;
    let equiLeadersCounter = 0;

    for (let i = 0; i < A.length; i++) {
      if (A[i] === value) {
        counter++;
      }
      if (counter > (i + 1) / 2 && count - counter > (A.length - i - 1) / 2)
        equiLeadersCounter++;
    }

    return equiLeadersCounter;
  } else {
    return 0;
  }
}

// tests
console.log(equiLeaders([4, 4, 2, 5, 3, 4, 4, 4]));
