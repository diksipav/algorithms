const maxSlice = (list) {

    let maxEnding = 0;
    let maxSlice = 0;

    for (let i=0;i<list.length;i++) {
        maxEnding = Math.max(0, maxEnding+ A[i]);
        maxSlice = Math.max(mathSlice, maxEnding);
    }

    return maxSlice;
}

// tests
console.log(maxSlice([5, -7, 3, 5, -2, 4. -1]));