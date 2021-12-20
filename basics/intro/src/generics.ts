class Queue<T> {
  data: T[] = [];

  push(item: T):void {
    this.data.push(item);
  }

  pop(): undefined | T {
    return this.data.pop();
  }
}
