// O(log(a+b))
function calculateGCD(a, b) {
  if (a % b === 0) return b;

  return calculateGCD(b, a % b);
}

const hasSameFactors = (a, b) => {
  if (a === b) return true;

  let gcd = calculateGCD(a, b);

  while (a !== 1) {
    let gcd_a = calculateGCD(a, gcd);
    if (gcd_a === 1) break;
    a = a / gcd_a;
  }

  if (a !== 1) return false;

  while (b !== 1) {
    let gcd_b = calculateGCD(b, gcd);
    if (gcd_b === 1) break;
    b = b / gcd_b;
  }

  return b === 1;
};

// O(N*log(M))
const commonPrimeDivisors = (A, B) => {
  let commonPrimeDivisorsCounter = 0;

  for (let i = 0; i < A.length; i++) {
    if (hasSameFactors(A[i], B[i])) commonPrimeDivisorsCounter++;
  }

  return commonPrimeDivisorsCounter;
};

// tests
//console.log(commonPrimeDivisors([15, 10, 3, 45], [75, 30, 5, 75]));
console.log(commonPrimeDivisors([15, 10, 3, 45], [75, 30, 5, 75]));
