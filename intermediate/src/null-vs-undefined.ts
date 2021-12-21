function decorate(value: string | null | undefined) {
  if (value == null) {
    return value;
  }

  return `-- ${value.trim()} --`;
}

console.log(decorate('Hello'));
console.log(decorate('Hello World'));

console.log(decorate(null));
console.log(decorate(undefined));
