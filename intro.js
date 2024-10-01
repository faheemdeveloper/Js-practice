// Ecma Script 2017
/*
let student = {
  myName: "Faheem",
  age: 22,
};

console.log(student);

let myName = "Faheem";
let age = 22;

Excesing Traditinol Way
// let profile = {myName : myName, age : age};
New Way
let profile = {myName, age};
console.log(profile);

const myName = "Faheem";
const age = 22;

// let student = {myName : myName, age : age};
let student = {myName, age}

console.log(student);

Accesing Array Element

let arr = [10, 20, 30, 40, 50];
// // Traditinol Way
// // let first = arr[3];
// // New Way

// [first, second, third, four, five] = arr
// console.log(five)

[first, Second, third, four, five] = arr;
console.log(five)

let arr = [10, 20, 30, 40, 50];
// [a, b, c, d, f] = arr;
// console.log(f)
// ignoring Element
[, , , , last] = arr;

console.log(last)

Swaping Properties
let a = 20;
let b = 50;

con
sole.log("a =", a,"b =",  b);
[a, b] = [b, a];

console.log("a =",a, "b =", b);

let a = 30;
let b = 70;
console.log("a =",a, "b =", b);
[a, b] = [b, a];
console.log()
console.log("a =",a, "b =", b);

Destruturing Properties with Object
let obj = {
    myName : "Faheem",
    age : 22,
    marks : 502,
};

const {myName, age, marks} = obj;
console.log(marks);
const {myName, age, marks} = obj;
console.log(age)

let obj = {
  myName: "Faheem",
  age: 22,
  marks: 502,
  Grade: "A",
};

// let newOBj = obj.marks;
let {myName, age, marks, Grade} = obj;
console.log(Grade)

// Renaming Properties
let obj = {
    myName : "Faheem",
    age : 22
};

// {myName : fullName, age : myAge} = obj;
let {myName, age} = obj

console.log(age)

let arr = ["Faheem", "wasid", "adil", "sohail"];
let newArr = [...arr];

console.log(newArr);

let students = ["Faheem", "sohail", "shehzad", "wasid"];
let newArr = [...students];
console.log(newArr);

let number1 = [1, 2, 3, 4];
let number2 = [4, 5, 6, 7];
let numbers = [...number2 ,...number1,];
console.log(numbers);


adding Element in Array with spread Operator
let student = ["Faheem", "wasid", "shehzad", "shahzaib"];
student.push(...["sohail", "adil", "qashif"])

console.log(student);

const country = "Pakistan";
Traditional Way
console.log(country.split(""))
New Way
console.log([...country]);
*/
// The sum of multiple number
// Traditional Way
/*
let sum = (a, b, c, d, e) => {
    return a + b + c + d + e;
};

console.log(sum(1, 2, 3, 4, 5));
*/

// New Way with Spread Operator
/*
let sum = (...hello) => {
    return hello.reduce((occum, currElem) => (occum + currElem), 0);
};

console.log(sum(3, 4,));
let sum = (...numbers) => {
    return numbers.reduce((occum, currElem) => {
        return occum + currElem;
    });
};
console.log(sum(3,4 ));

let sum = function (...number) {
    return number.reduce((occum, currElem) => {
        return occum + currElem;
    });
};
console.log(sum(34, 3,))
*/

