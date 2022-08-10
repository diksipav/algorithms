// const reverseList = function (head) {
//   if (!head?.next) return head;

//   let prev = null;
//   let current = head;

//   while (current) {
//     const oldNext = current.next;
//     current.next = prev;
//     prev = current;
//     current = oldNext;
//   }

//   return prev;
// };

//Recursive
// const reverseList = function (head) {
//   let { start } = recursive(head);
//   return start;
// };

// function recursive(head) {
//   if (!head?.next) return { start: head, end: head };

//   let { start, end } = recursive(head.next);
//   head.next = null;
//   end.next = head;
//   end = end.next;
//   return { start, end };
// }

// Recursive;
const reverseList = function (head) {
  if (!head?.next) return head;

  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};

console.log(
  reverseList({ val: 1, next: { val: 2, next: { val: 3, next: null } } })
);

console.log(reverseList({ val: 1, next: null }));
console.log(reverseList(null));
