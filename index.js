const Node = require('./node');

class LinkedList {
  constructor(data) {
    this.head = null;
    this.tail = null;

    if (Array.isArray(data)) {
      for (const value of data) {
        this.add(value);
      }
    } else if (data) {
      this.add(data);
    }
  }

  add(value) {
    if (value === null) {
      throw new Error('Expected a value');
    }

    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    }
    
    if (this.tail !== null ) {
      this.tail.next = node;
    }

    this.tail = node;
  }

  remove(value) {
    if (this.head.value === value) {
      this.head = this.head.next;

      if (this.head.value === this.tail.value) {
        this.tail = null;
      }

      return 0;
    }

    let counter = 1;
    let previous = this.head;
    let current = this.head.next;
    
    while (current) {
      if (current.value === value) {
        previous.next = current.next;
        if (value === this.tail.value) {
          this.tail = previous;
        }
        return counter;
      }

      counter++;
      previous = current;
      current = current.next;
    }

    return -1;
  }

  print() {
    let counter = 0;
    let current = this.head;
  
    while(current) {
      console.log(`# ${counter++} value: ${current.value}`);
      current = current.next;
    }
  }
}

module.exports = LinkedList;
