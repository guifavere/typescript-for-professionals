type Padding = number | string;

function padLeft(value: string, padding: Padding) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }

  if (typeof padding === 'string') {
    return padding + value;
  }

  throw new Error(`Expected number or string, got ${padding}`);
}

padLeft('Hello world', 4);
padLeft('Hello world', '   ');
padLeft('Hello world', '---');
padLeft('Hello world', true); // error
