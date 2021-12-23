type Add = {
  (a: number, b: number): number,
  (a: number, b: number, c: number): number,
  debugName?: string,
};

const add: Add = (a: number, b: number, c?: number) => {
  return a + b + (c != null ? c : 0);
};

add.debugName = 'additional function';
