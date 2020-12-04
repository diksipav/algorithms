// Find target by only multiplying by 3, or adding 5.
function findTarget(x) {
  function find(current, history) {
    if (current == x) {
      return history;
    }

    if (current < x) {
      return (
        find(current + 5, `(${history} + 5)`) ||
        find(current * 3, `${history} * 3`)
      );
    }
  }

  return find(1, "1");
}

// tests
console.log(findTarget(13));
console.log(findTarget(15));
