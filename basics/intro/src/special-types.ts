let exampleAny: any;
let exampleUnknown: unknown;

// any
exampleAny = 123;
exampleAny = 'Hello';

// unknown
exampleUnknown = 123;
exampleUnknown = 'Workd';

// any
exampleAny.allows.anything.you.can.imagine();
let anySetBool: boolean = exampleAny;

// unknown
if (typeof exampleUnknown === 'string') {
  exampleUnknown.trim();
}

if (typeof exampleUnknown === 'boolean') {
  let unknownSetBool: boolean = exampleUnknown;
}
