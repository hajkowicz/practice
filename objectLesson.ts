/*Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument.

Also write a listToArray function that
produces an array from a list.

Then add a helper function prepend, which takes
an element and a list and creates a new list that adds the element to the front
 of the input list,

 and nth, which takes a list and a number and returns the
 element at the given position in the list (with zero referring to the first
   element) or undefined when there is no such element.
   */

var arr = [1, 2, 3];
type ListNode = {value: number | string, next: ListNode | null} | null;
var list = {value: 1, next:{value: 2, next:{value: 3, next: null}}};

var arrayToList = function(arr: Array<number>): ListNode {
  var firstNode = null;

  for(var position of arr) {
    if (firstNode === null) {
      firstNode = {value: position, next: null};
    } else {
      console.log('firstNode');
      console.log(firstNode);
      var newNode = {value: position, next: null};
      var currentNode = firstNode;
      while (currentNode.next !== null) {
        console.log('currentNode');
        console.log(currentNode);
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  };
  return firstNode;
};
var solution = arrayToList([1, 2, 3, 4, 5]);

console.log(JSON.stringify(solution.next.next, null, '\t'));
