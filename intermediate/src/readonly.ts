class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const sheep = new Animal('sheep');

console.log(sheep.name);
