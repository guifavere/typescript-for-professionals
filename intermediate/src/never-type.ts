interface Square {
  kind: 'square';
  size: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape2 =
  | Square
  | Rectangle
  | Circle;

function area(s: Shape2) {
  if (s.kind === 'square') {
    return s.size * s.size;
  } else if (s.kind === 'rectangle') {
    return s.width * s.height;
  } else if (s.kind === 'circle') {
    return Math.PI * (s.radius ** 2);
  }

  const _ensureAllCasesAreHandled: never = s;

  return _ensureAllCasesAreHandled;
}