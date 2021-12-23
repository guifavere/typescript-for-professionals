type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number };
type Person2 = { name: string, email: string };

let point2: Point2D = { x: 0, y: 0 };
let point3: Point3D = { x: 10, y: 10, z: 10 };
let person: Person2 = { name:  'john', email: 'john@example.com' };

point2 = point3;
point3 = point2; // error
point3 = point2 as Point3D;

person = point3; // error
point3 = person; // error
point3 = person as Point3D; // error
point3 = person as unknown as Point3D;
