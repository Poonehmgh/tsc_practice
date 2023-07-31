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

// let myArray: string[] = [];
// myArray.push("Hello");
// myArray.push(" My");
// myArray.push("Name is Pinar");
// console.log(myArray[2]);
// myArray.pop();
// console.log(myArray[2]);

// let myTuple: [string, number, boolean];
// myTuple = ["JOJO", 123, true];
// console.log(myTuple);
// myTuple.push("NOOO");
// console.log(myTuple);
//

interface car_ {
    name: string;
    motor?: number;
    full_detail(): string;
}

const cars: car_ = {
    name : "vw",
    full_detail()
    {
        return "hi";
    },
};
console.log(cars.full_detail());