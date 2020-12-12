function dominator(A) {
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

  if (!stack.length) return -1;

  const candidate = stack.pop();
  let count = 0;
  let index;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === candidate) {
      count++;
      index = i;
    }
  }

  if (count > A.length / 2) return index;
  return -1;
}
