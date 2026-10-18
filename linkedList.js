class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.list = null;
  }
  append(value) {
    if (this.list === null) {
      const node = new Node();
      node.value = value;
      this.list = node;
    } else {
      let current = this.list;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      const node = new Node();
      node.value = value;
      current.nextNode = node;
    }
  }
  prepend(value) {
    if (this.list === null) {
      const node = new Node();
      node.value = value;
      this.list = node;
    } else {
      let current = this.list;
      if (current) {
        const node = new Node();
        node.value = value;
        node.nextNode = current;
        this.list = node;
      }
    }
  }
  size() {
    if (this.list === null) {
      return 0;
    } else {
      let count = 0;
      let current = this.list;
      while (current) {
        current = current.nextNode;
        count++;
      }
      return count;
    }
  }
  head() {
    if (this.list === null) {
      return undefined;
    } else {
      let current = this.list;
      if (current.nextNode == null) {
        return current.value;
      }
    }
  }
}
