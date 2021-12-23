interface Person3 {
  name: string;
  age: number;
  location: string;
};

const john: Person3 = {
  name: 'john',
  age: 35,
  location: 'Melbourne',
};

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key) {
  const value = obj[key];

  console.log('Getting:', key, value);

  return value;
}

const age = logGet(john, 'age');

function logSet<Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[key]) {
  console.log('Setting:', key, value);
}

logSet(john, 'age', 36);
