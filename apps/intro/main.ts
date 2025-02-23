export {};

const sum = (a: number, b: number): number => a + b;
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
const value1: boolean = true;

// number type
const value2: number = 5;

// string type
const value3: string = "Typescript";
const value4: string = `Hello ${value3}`;

// Array type
const value5: number[] = [1, 2, 3];
const value6: Array<number> = [1, 2, 3];

// Tuple type
// Tuple types allow you to express an array with a fixed number of elements whose types are known
const value7: [number, string] = [1, "Typescript"];

// Enum type
// Enums are useful when we have a set of constants and we want to give them a friendly name
// Enums are used to create a collection of related values
// Enums are defined using the enum keyword

enum Color {
  Red,
  Green,
  Blue,
}

const value8: Color = Color.Red;
console.log(value8); // 0
const value9: string = Color[1];
console.log(value9); // Green

enum Color2 {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

const value10: Color2 = Color2.Red;
console.log(value10); // red

// Any type - BE CAREFUL
// The any type is used to opt-out of type checking

let value11: any = 5;
value11 = "Typescript";
value11 = true;

console.log(value11); // true

// Void type
// The void type is used when a function does not return anything

const value12 = (): void => {
  console.log("Typescript");
};

// Null and Undefined types
// The null and undefined types are used to represent null and undefined values respectively

let value13: null = null;
let value14: undefined = undefined;

// Never type
// The never type represents the type of values that never occur
// For example, a function that throws an error or never returns a value
// The never type is a subtype of all types and it can be assigned to any type
// However, no other type can be assigned to the never type

const throwError = (message: string): never => {
  throw new Error(message);
};

// Object type
// The object type is used to represent any non-primitive type
// This includes arrays, functions, classes, objects, etc.
// The object type is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, symbol, null, or undefined

let value15: object = {
  name: "Typescript",
  duration: 30,
};

// Type assertions
// Type assertions are a way to tell the TypeScript compiler that you know what type a variable is
// Type assertions have two forms: angle bracket syntax and as syntax
// The angle bracket syntax is the older form of type assertion
// The as syntax is the newer form of type assertion

let value16: any = "Typescript";
let length1: number = (<string>value16).length;
let length2: number = (value16 as string).length;
let emptyObject = {} as Course;
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

// interface type
// An interface is a way to define a contract in your code
// It defines the structure of an object, including the properties and methods that the object should have
// Interfaces are used to enforce a certain shape on an object
// Interfaces are used to define custom types in TypeScript

interface Course {
  name: string;
  duration?: number; // Optional property
}
 
type Course2 = {
  name: string;
  duration: number;
}

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
  name: string; // Public by default
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHi(): void {
    console.log(`Hi, my name is ${this.name}`);
  }
}

const person = new Person("Typescript", 30);  
person.sayHi(); // Hi, my name is Typescript

// function type
// Function types are used to define the signature of a function
// Function types specify the parameters and return type of a function
// Function types are used to enforce the types of functions

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
console.log(add(1, 2)); // 3

// Union type
// Union types are used to combine multiple types into one type
// Union types are used to express that a value can be one of several types
// Union types are specified using the | operator

let value21: number | string = 5;
value21 = "Typescript";


// Declaration type
// Declaration files are used to provide type information for JavaScript code
// Declaration files have a .d.ts extension
// Declaration files are used to provide type information for libraries and modules that are written in JavaScript

// Declaration file for a library

// declare module "library" {
//   export function sayHi(name: string): void;
// }

// Usage of declaration file

// import { sayHi } from "library";
// sayHi("Typescript");

// Generics
// Generics are a way to create reusable components in TypeScript
// Generics allow you to define a type with placeholders that can be filled in later

// Example of a generic function

const identity = <T>(value: T): T => value;

const result1 = identity<number>(5);
const result2 = identity<string>("Typescript");

interface SumFunction <T> {
  (a: T, b: T): T;
}

const sum2: SumFunction<number> = (a, b) => a + b;
// console.log(sum2(1, 2)); // 3

// More complex example of generics

interface SetStorage<T> { 
  setItem(key: string, value: T): void;
  getItem(key: string): T | null;
}

interface SetStorage2<T> {  
  setItem: (key: string, value: T) => void;
  getItem: (key: string) => T | null;
}

class GenericNumber<T=number> {
  value!: T;
  add!: (x: T, y: T) => T; 
}

const genericNumber = new GenericNumber();
genericNumber.value = 0;
genericNumber.add = (x, y) => x + y; 

const otherGenericOpition = new GenericNumber<string>();
otherGenericOpition.value = "0";
otherGenericOpition.add = (x, y) => x + y;

// Another function example with Generics

const removeDuplicates = <T>(array: T[]): T[] => {
  return [...new Set(array)];
}

console.log(removeDuplicates([1, 2, 3, 1, 2, 3])); // [1, 2, 3]
console.log(removeDuplicates(["a", "b", "c", "a", "b", "c"])); // ["a", "b", "c"]

const removeDuplicates2 = <T>(array: T[]): T[] => {
  return array.filter((value, index) => array.indexOf(value) === index);
}

console.log(removeDuplicates2([1, 2, 3, 1, 2, 3])); // [1, 2, 3]

const removeDuplicates3 = <T>(array: T[]): T[] => {
  return Array.from(new Set<T>(array));
}

console.log(removeDuplicates3([1, 2, 3, 1, 2, 3])); // [1, 2, 3]