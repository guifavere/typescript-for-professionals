// array
let newArray = [1, 2, 3];

// usage
newArray = [1];
newArray = [1, 2, 3, 4, 5];
newArray = ['hello']; // error

// tuple
let tuple: [number, number] = [0, 0];

// usage
tuple = [1, 2];
tuple = [5, 6];
tuple = [5]; // error
tuple = [5, 4, 3]; // error
tuple = ['test', 10]; // error
