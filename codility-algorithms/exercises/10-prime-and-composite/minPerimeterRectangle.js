const minPerimeterRectangle = (N) => {
  const factorsFirstHalf = [];

  let i = 1;

  while (i <= Math.sqrt(N)) {
    if (N % i === 0) factorsFirstHalf.push(i);
    i++;
  }

  let minHalfPerimeter = factorsFirstHalf[0] + N / factorsFirstHalf[0];

  for (let i = 1; i < factorsFirstHalf.length; i++) {
    let halfPerimeter = factorsFirstHalf[i] + N / factorsFirstHalf[i];
    if (halfPerimeter < minHalfPerimeter) minHalfPerimeter = halfPerimeter;
  }

  return minHalfPerimeter * 2;
};

// tests
console.log(minPerimeterRectangle(30));
