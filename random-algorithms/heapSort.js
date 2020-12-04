const maxHeapify = (heap, i) => {
  let maxChildIndex = 2 * i + 1;

  if (heap[maxChildIndex] < heap[2 * i + 2]) {
    maxChildIndex = 2 * i + 2;
  }

  if (heap[i] < heap[maxChildIndex]) {
    let temp = heap[i];
    heap[i] = heap[maxChildIndex];
    heap[maxChildIndex] = temp;

    maxHeapify(heap, 2 * i + 1);
    maxHeapify(heap, 2 * i + 2);
  }
};

const createMaxHeap = (list) => {
  let size = list.length;

  for (let i = Math.floor(size / 2); i >= 0; i--) {
    maxHeapify(list, i);
  }

  return list;
};

const convertMaxHeapToArray = (maxHeap) => {
  let sorted = [];

  while (maxHeap.length) {
    let size = maxHeap.length;
    let max = maxHeap[0];
    maxHeap[0] = maxHeap[size - 1];
    maxHeap[size - 1] = max;
    sorted.push(max);
    maxHeap = maxHeap.slice(0, size - 1);
    maxHeapify(maxHeap, 0);
  }

  return sorted;
};

const heapSort = (list) => {
  const heap = createMaxHeap(list);
  const sortedArray = convertMaxHeapToArray(heap);

  return sortedArray;
};

// tests
console.log(createMaxHeap([3, 8, 1, 9, 2, 3, 6, 4, 10, 7, 5]));
console.log(heapSort([3, 8, 1, 9, 2, 3, 6, 4, 10, 7, 5]));
