var isValid = function (s) {
  const mapping = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  if (!mapping[s[0]] || s.length % 2 !== 0) return false;

  const stack = [];

  for (const elem of s) {
    if (!stack.length || mapping[stack[stack.length - 1]] !== elem)
      stack.push(elem);
    else {
      stack.pop();
    }
  }

  return !stack.length;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("()[]}"));
