class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

export class LinkedList {
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

      const node = new Node();
      node.value = value;
      node.nextNode = current;
      this.list = node;
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
      return current;
    }
  }
  tail() {
    if (this.list === null) {
      return undefined;
    } else {
      let current = this.list;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      return current.value;
    }
  }
  at(index) {
    if (this.list === null) {
      return undefined;
    } else {
      let count = 0;
      let current = this.list;
      if (index < 0) {
        return undefined;
      }
      while (count < index) {
        current = current.nextNode;
        count++;
        if (current === null) {
          return undefined;
        }
      }

      return current.value;
    }
  }
  pop() {
    if (this.list === null) {
      return undefined;
    } else {
      let current = this.list;
      let head = this.list;
      if (current.nextNode !== null) {
        current = current.nextNode;
        this.list = current;
      } else {
        this.list = null;
      }
      return head.value;
    }
  }
  contains(value) {
    let current = this.list;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  findIndex(value) {
    let current = this.list;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      } else {
        current = current.nextNode;
        index++;
      }
    }
    return -1;
  }
  toString() {
    let current = this.list;
    let string = "";
    if (this.list === null) {
      return "";
    }
    while (current) {
      current.nextNode
        ? (string += `( ${current.value} ) -> `)
        : (string += `( ${current.value} ) -> null`);
      current = current.nextNode;
    }
    return string;
  }
}
