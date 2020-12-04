// true if peak, false if not - O(N)
const getPeaks = (list) => {
  let N = list.length;

  if (N === 1) return [false];

  let peaks = [];
  for (let i = 0; i < N; i++) {
    peaks.push(false);
  }

  for (let i = 1; i < N - 1; i++) {
    if (list[i] > list[i + 1] && list[i] > list[i - 1]) {
      peaks[i] = true;
    }
  }

  return peaks;
};

// check if X flags can be placed on peaks - O(N)
const checkXFlags = (peaks, x) => {
  let flags = x;
  let pos = 0;

  console.log(peaks);
  while (pos < peaks.length && flags > 0) {
    if (peaks[pos]) {
      flags = flags - 1;
      pos = pos + x;
    } else {
      pos += 1;
    }
  }
  return flags === 0;
};

// calculate number of flags that can be placed - O(N^2)
const flags = (list) => {
  if (list.length === 1) return 0;

  const peaks = getPeaks(list); // O(N)

  let maxFlags = 0; // this can also be returned from getPeaks

  for (let i = 0; i < peaks.length; i++) {
    if (peaks[i]) maxFlags++;
  }

  while (maxFlags > 0) {
    let checkFlags = checkXFlags(peaks, maxFlags);

    if (checkFlags) {
      return maxFlags;
    } else {
      maxFlags--;
    }
  }

  return maxFlags;
};

// tests
//console.log(flags([0, 0, 0, 0, 0, 1, 0, 1, 0, 0]));

const getNextPeaks = (list) => {
  let N = list.length;
  let peaks = getPeaks(list);
  let next = [];

  for (let i = 0; i < N; i++) {
    next.push(0);
  }
  next[N - 1] = -1;

  for (let i = N - 2; i >= 0; i--) {
    if (peaks[i]) {
      next[i] = i;
    } else {
      next[i] = next[i + 1];
    }
  }
  return next;
};


