function reverseInteger(x) {
  const positive = x >= 0;
  const MAX_SAFE = 2 ** 31 - 1;
  const NEG_MAX_SAFE = 2 ** 31;

  x = Math.abs(x);

  let reversed = 0;

  while (x) {
    const pop = x % 10;

    if (
      positive &&
      (reversed > MAX_SAFE / 10 ||
        (reversed == Math.floor(MAX_SAFE / 10) && pop > 7))
    )
      return 0;

    if (
      !positive &&
      (reversed > NEG_MAX_SAFE / 10 ||
        (reversed == Math.floor(NEG_MAX_SAFE / 10) && pop > 8))
    )
      return 0;

    reversed = reversed * 10 + pop;
    x = Math.floor(x / 10);
  }

  if (reversed > 2 ** 31 - 1) return 0;
  return positive ? reversed : -reversed;
}

console.log(reverseInteger(123));
console.log(reverseInteger(-123));
console.log(reverseInteger(0));
console.log(reverseInteger(-0));
console.log(reverseInteger(120));
console.log(reverseInteger(-120));
