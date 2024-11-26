const sum = (a, b) => a + b;
// console.log(sum(1, 2)); // 3
// Sidenote: Nullish Coalescing Operator
const course = {
    name: "Typescript",
    duration: 30,
    price: 100,
    discountedPrice: 0,
};
const price1 = course.discountedPrice || course.price; // For falsy values
console.log(price1); // 100
const price2 = course.discountedPrice ?? course.price; // For nullish values - null or undefined
console.log(price2); // 0
// Dynamic Import and tsconfig.json changes to accomodate it
// "module": "esnext",
// "moduleResolution": "node",
// "target": "ES2021",
// "importHelpers": true,
// "downlevelIteration": true,
// "strict": true,
// "esModuleInterop": true,
// "allowSyntheticDefaultImports": true,
// Example dynamic import with Promise.all
if (false) {
    const promises = await Promise.all([import("./test.js")]);
    const resolved = promises[0];
    resolved.sayHi("Typescript");
}
// boolean type
const value1 = true;
// number type
const value2 = 5;
// string type
const value3 = "Typescript";
const value4 = `Hello ${value3}`;
// Array type
const value5 = [1, 2, 3];
const value6 = [1, 2, 3];
// Tuple type
// Tuple types allow you to express an array with a fixed number of elements whose types are known
const value7 = [1, "Typescript"];
// Enum type
// Enums are useful when we have a set of constants and we want to give them a friendly name
// Enums are used to create a collection of related values
// Enums are defined using the enum keyword
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
const value8 = Color.Red;
console.log(value8); // 0
const value9 = Color[1];
console.log(value9); // Green
var Color2;
(function (Color2) {
    Color2["Red"] = "red";
    Color2["Green"] = "green";
    Color2["Blue"] = "blue";
})(Color2 || (Color2 = {}));
const value10 = Color2.Red;
console.log(value10); // red
// Any type - BE CAREFUL
// The any type is used to opt-out of type checking
let value11 = 5;
value11 = "Typescript";
value11 = true;
console.log(value11); // true
// Void type
// The void type is used when a function does not return anything
const value12 = () => {
    console.log("Typescript");
};
// Null and Undefined types
// The null and undefined types are used to represent null and undefined values respectively
let value13 = null;
let value14 = undefined;
// Never type
// The never type represents the type of values that never occur
// For example, a function that throws an error or never returns a value
// The never type is a subtype of all types and it can be assigned to any type
// However, no other type can be assigned to the never type
const throwError = (message) => {
    throw new Error(message);
};
// Object type
// The object type is used to represent any non-primitive type
// This includes arrays, functions, classes, objects, etc.
// The object type is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, symbol, null, or undefined
let value15 = {
    name: "Typescript",
    duration: 30,
};
// Type assertions
// Type assertions are a way to tell the TypeScript compiler that you know what type a variable is
// Type assertions have two forms: angle bracket syntax and as syntax
// The angle bracket syntax is the older form of type assertion
// The as syntax is the newer form of type assertion
let value16 = "Typescript";
let length1 = value16.length;
let length2 = value16.length;
let emptyObject = {};
emptyObject.name = "Typescript";
// let emptyObject2: Course = {}; // Error - Property 'name' is missing in type '{}' but required in type 'Course'
// Type inference
// TypeScript has a powerful type inference system that allows you to omit the type annotations in many cases
// TypeScript can infer the types of variables, function return values, and function parameters based on their usage
// This makes the code more concise and easier to read
// However, you can still provide type annotations if you want to be explicit about the types
// Type inference works well in most cases, but there are some cases where you need to provide type annotations
let value17 = 5; // number
let value18 = "Typescript"; // string
let value19 = [1, 2, 3]; // number[]
let value20 = { name: "Typescript", duration: 30 }; // { name: string, duration: number }
// Difference between interface and type
// Interfaces can be extended, while types can be intersected
// Interfaces are open and can be augmented, while types are closed
// Interfaces are better when defining objects, while types are better when defining shapes
// Interfaces are better for defining contracts, while types are better for defining aliases
// Classes
// Classes are a way to define blueprints for objects
// Classes are used to create objects that have properties and methods
// Classes are used to create instances of objects
// Classes are used to create reusable code
class Person {
    name; // Public by default
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`Hi, my name is ${this.name}`);
    }
}
const person = new Person("Typescript", 30);
person.sayHi(); // Hi, my name is Typescript
const add = (a, b) => a + b;
console.log(add(1, 2)); // 3
// Union type
// Union types are used to combine multiple types into one type
// Union types are used to express that a value can be one of several types
// Union types are specified using the | operator
let value21 = 5;
value21 = "Typescript";
export {};
