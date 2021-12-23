type Point2 = readonly [number, number];

function move(point: Point2, x: number, y: number): Point2 {
  return [point[0] + x, point[1] + y];
}

const point: Point = [0, 0];
const moved = move(point, 10, 10);

console.log(moved); // [10, 10]
console.log(point); // [0, 0]
