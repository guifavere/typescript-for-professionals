class Person1 {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

const adam = new Person1('Adam', 120000);

console.log(adam.name, adam.age);
