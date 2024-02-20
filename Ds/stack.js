class stack {
  constructor() {
    this.item = [];
  }
  add(element) {
    this.item.push(element);
  }
  remove() {
    this.item.pop();
  }
  peek() {
    return this.item[this.item.length - 1];
  }
  isEmpty() {
    return this.item.length === 0;
  }
  size() {
    return this.item.length;
  }
  print(){
    console.log(this.item.toString())
  }
}

let stacks = new stack();
console.log(stacks.isEmpty());
stacks.add(10);
stacks.add(14);

stacks.add(17);
stacks.add(60);
console.log(stacks.item);
// stacks.remove()
console.log(stacks.peek());
console.log(stacks.isEmpty());
console.log(stacks.size());
console.log(stacks.print());
