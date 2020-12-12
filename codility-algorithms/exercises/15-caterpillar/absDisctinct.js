// O(N)
const absDistinct = (list) => {
  let counter = {};

  for (let i = 0; i < list.length; i++) {
    let abs = Math.abs(list[i]);

    if (counter[abs]) {
      counter[abs] += 1;
    } else {
      counter[abs] = 1;
    }
  }

  return Object.keys(counter).length;
};

// O(N)
const absDistinctCaterpillar = (list) => {};

// tests
console.log(absDistinct([-5, -3, -1, 0, 3, 6]));
