const center = {
  x: 0,
  y: 0,
  z: 0,
};

type Point = typeof center;

const unit: Point = {
  x: center.x + 1,
  y: center.y + 1,
  z: center.z + 1,
};
