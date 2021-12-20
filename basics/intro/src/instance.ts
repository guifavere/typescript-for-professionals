let regexp: RegExp = new RegExp('ab+c');

let array: number[] = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

class Queue<T> {
  private data: T[] = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T|undefined {
    return this.data.shift();
  }
}