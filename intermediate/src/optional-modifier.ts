class Point {
  x?: number | null;
  y?: number;
}

const point = new Point();

console.log(point.x);

point.x = 0;
point.x = undefined;
point.x = null;
