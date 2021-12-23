interface Square {
  size: number;
}

interface Recactangle {
  width: number;
  height: number;
}

type Shape = Square | Recactangle;

function isSquare(shape: Shape): shape is Square {
  return 'size'in shape;
}

function isRecactangle(shape: Shape): shape is Recactangle {
  return 'width'in shape;
}

function area(shape: Shape) {
  if (isSquare(shape)) {
    return shape.size * shape.size;
  }

  if (isRecactangle(shape)) {
    return shape.width * shape.height;
  }

  const _ensure: never = shape;

  return _ensure;
}
