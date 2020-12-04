// n sticks, every between 1 < ai <10^9
// how many triangles?
//x < y < z and ax + ay > az
const triangles = (sticks) => {
  let counter = 0;

  for (let x = 0; x < sticks.length - 2; x++) {
    z = x + 2;
    for (let y = x + 1; y < sticks.length - 1; y++) {
      while (z < sticks.length && sticks[x] + sticks[y] > sticks[z]) {
        z++;
      }
      counter += z - y + 1;
    }
  }

  return counter;
};
