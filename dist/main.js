"use strict";
// /* defining an obj without using interface: */
// const obj = {
//     name: 'Sara',
//     age: 30,
// };
// const obj2 = {
//     name: 'jack',
// };
//
// //or we can use interfaces for defining objects:
//
// interface Object {
//     name: string;
//     age?: number; // it means that age is not mandatory
//     getMessage(): string;
// };
//
// /* define an object based on an interface: */
// const obj3: Object = {
//     name: 'sara',
//     getMessage() {
//         return "hello " + name;
//     },
// };
//
// //define non const variable:
// let username: string = 'alex';
//
// //union operator, combines data types. here we dont know the page number would be string or number, and the default value is "1":
// let pagenumber: string | number = "1";
// let errorMessage: string | null = null;
//
// //define a function:
// const getFullName = (name: string, surname: string) => {
//     return name + " " + surname;
// };
// console.log(getFullName("Pooneh", "Mgh"));
const cars = {
    name: "vw",
    full_detail() {
        return "hi";
    },
};
console.log(cars.full_detail());
