# linked-list
Simple implementation of linked list data structure.

# Documentation
To create an instance there are several options.

```javascript
const LinkedList = require('linked-list');

const emptyList = new LinkedList();
const listWithHeadOnly = new LinkedList(2);
const listWithSeveralNodes = new LinkedList([1,2]);
```

## Add
Insert time complexity is constant - O(1).
You can insert new value into the list using method add:
``` javascript
list.add(2);
list.add(3);
```

## Remove
Remove time complexity is linear - O(N).
You can remove values using method remove. Return value: index of the removed element.
```javascript
const list = new LinkedList([1, 2, 3]);

const index = list.remove(2);

console.log(index); // 1
```

## Print
To print the list, you can use method print.
```javascript
const list = new LinkedList([1, 2, 3]);
list.print();
```

# Tests
Fully covered with tests including edge cases.
To run tests use:
```javascript
npm test
```