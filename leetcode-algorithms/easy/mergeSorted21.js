var mergeTwoLists = function (list1, list2) {
  const list = [];

  let i = 0;
  let j = 0;

  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) list.push(list1[i++]);
    else list.push(list2[j++]);
  }
};
