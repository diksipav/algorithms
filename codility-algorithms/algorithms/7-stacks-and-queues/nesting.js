const nesting = (word) => {
  if (!word.length) return 1;

  let stack = [];

  for (let i = 0; i < word.length; i++) {
    if (word[i] === "(") stack.push(word[i]);
    else {
      if (stack[stack.length - 1] === "(") {
        stack.pop();
      } else return 0;
    }
  }

  return stack.length === 0 ? 1 : 0;
};

// tests
console.log(nesting("(()(())())"));
console.log(nesting("())"));
