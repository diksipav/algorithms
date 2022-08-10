const allUniqueCharsInString = (word) => {
  const counter = {};

  for (let i = 0; i < word.length; i++) {
    if (counter[word[i]]) {
      return false;
      // counter[char] += 1;
    } else {
      counter[word[i]] = 1;
    }
  }

  return true;
};

// tests
console.log(allUniqueCharsInString(""));
console.log(allUniqueCharsInString("abcd"));
console.log(allUniqueCharsInString("abca"));
console.log(allUniqueCharsInString("ab++sd"));
