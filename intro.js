// let myName = "Faheem";
// const age = 22;
// let marks = 502;
// let myNum;
// let num = null;
// console.table([myName, age, marks, myNum]);

// console.log(typeof num)

// function exampleLet() {
//   let x = 10;

//   if (true) {
//     let x = 20; // Block scope, new variable inside the block
//     console.log(x); // 20
//   }

//   console.log(x); // 10 (original value outside the block)
// }

// exampleLet();

// function exampleVar() {
//   var x = 10;

//   if (true) {
//     var x = 20; // Same variable, re-declared within the same function
//     console.log(x); // 20
//   }

//   console.log(x); // 20 (still 20 because of function scope)
// }

// exampleVar();

// let score = "faheem";
// let toStr = Number(score);

// console.log(score, typeof score);
// console.log(toStr, typeof toStr);

// let num = 4;
// let toBol = Boolean(num);
// console.log(num, typeof num);
// console.log(toBol, typeof toBol);

// ********************* Operations  *********************
/*
let value = 3;
let negVal = -value;
// console.log(negVal);

// console.log(+"Faheem")

let num1, num2, num3;
num1, num2, (num3 = 2 + 2);
console.log(num2);

let myName = "Faheem";
let myAge = 22;
let marks = 502;
let Grade = "D";

console.table([myName, myAge, marks, Grade]);

console.log(3 + 5 + "8");
console.log("3" + 5 + 8);
console.log(true + "4" + 3);
console.log("4" + 3 + false);
console.log(true - "3");
console.log(false - "4" + 4);
let value = 4;
let negValue = +value;
console.log(negValue)

var age = 22;
var age = 22 + 2;
console.log(age);

let age = 22;
age + 3;
console.log(age)

const age = 22;
age = 22 + 3;
console.log(age);

let a = 5;
let b = 3;
a += 4;
console.log(a + b);

let myName = "M_";
myName += "Faheem";
console.log(myName);
*/
// *********************** Arithematic Operators ***********************
/*
let a = 3;
let b = 8;
[a, b] = [b, a]
let devide = a / b;
console.log("a =", a, "b =", b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log(devide.toFixed(1))
console.log("a ** b =", a ** b);
*/
// *********************** Ternery Operators ***********************
/*
let a = 8;
let b = 3;
console.log("a =", a, "b =", b);

let age = 19;
let license = true;
let result = age >= 18 && license;
console.log(result);
*/
// *********************** Comparision Operators ***********************
/*
let a = 8;
let b = 9;
console.log("a =", a, "b =", b);

console.log("a == b", a == b);
console.log("a === b", a === b);
console.log("a != b", a != b);
console.log("a !== b", a !== b);
console.log("a > b", a > b);
console.log("a < b", a < b);
console.log("a >= b", a >= b);
console.log("a <= b", a <= b);
*/

// let num = 45;
// console.log(typeof String(num));
// console.log(typeof (num + ""));
// let str = "Faheem";
// console.log(typeof Number(str));
// console.log(typeof +(str));

// let numbers = 45.3;
// console.log(parseFloat(numbers));
// console.log(parseInt(numbers));

// let num = 0.1 + 0.2;
// console.log(num.toFixed(1));

// let str = "Faheem";
// console.log(isNaN(str));

// let isFollow = true;
// let toStr = +(isFollow);
// console.log(isFollow, typeof isFollow);
// console.log(toStr, typeof toStr);

// let num = 0;
// let toBool = Boolean(num);
// console.log(num, typeof num);
// console.log(toBool, typeof toBool);

// let score = 63;

// let result = (score >= 60 && "Pass") || "Fail";
// console.log(result);

// let num = undefined;
// let num2 = 40;

// let result = num ?? num2;
// console.log(result);

// const { length } = "JavaScript";
// console.log(length);

// let arr = ["Faheem", "shehzad", "wasid"];
// [, , third] = arr;
// console.log(third);
// console.log(arr);

// let a = 29;
// let b = 20;
// [a, b] = [b, a];
// console.log(a, b);

// const obj = {
//   myName: "Faheem",
//   age: 22,
//   marks: 502,
//   grade: "D",
// };
// const {myName, age, marks, grade} = obj;
// console.log(myName)

// const obj = {
//   myName: "Faheem",
//   age: 22,
//   marks: 502,
//   grade: "D",
// };
// const { myName: fullName, age, marks, grade } = obj;
// console.log(fullName);

// let arr = ["Faheem", "shehzad", "wasid", "sohail"];
// let newArr = [...arr];
// console.log(newArr);

// let arr = ["Faheem", "shehzad", "wasid", "sohail"];
// let arr3 = ["adil", "saqib"];
// let fullArr = [...arr, ...arr3];
// console.log(fullArr);

// let sum = (...number) => {
//   return number.reduce((occum, currElem) => {
//     return occum + currElem;
//   });
// };

// console.log(sum(4, 3, 4, 3));

// let arr = [1, [2, [3, [4, [5], 6], 7], 8], 9];
// console.log(arr.flat(4));

// let country = "Pakistan";
// console.log(country);

// let obj1 = { a: 10, b: 30 };
// let obj2 = { c: 40, d: 50 };
// let fullObj = { ...obj1, ...obj2 };
// console.log(fullObj);

// let num = 1;
// let toBool = Boolean(num);
// console.log(toBool);
//
// ************************** Comparison Operator **************************
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// let myName = "Faheem";

// let myfullName = myName;
// myfullName = "M_Faheem";

// console.log(myfullName);
// console.log(myName);

// let myName = new String("Faheem");
// console.log(myName, typeof myName);

// let num = new Number(400);
// console.log(num)

// let number = 123.8966;

// console.log(number.toPrecision(3));

// let number = 10000000;
// console.log(number.toLocaleString("en-US"));

// let myemail = "info@gmail.com";
// let myEmail = myemail;

// myEmail = "faheem@gmail.com";
// console.log(myemail);
// console.log(myEmail);

// let obj = {
//   myName: "Faheem",
//   email: "info@gmail.com",
// };

// let myOBj = obj;
// obj.email = "faheem@gmail.com";
// console.log(obj);
// console.log(myOBj);

// let str = "hello javaScript welcome\nto javascript course";

// console.log(str.toLowerCase())
// console.log(str.replace("s", "S"));
// console.log(str.slice(0, 6));
// console.log(str.lastIndexOf("c"));
// console.log(str.charAt(7));
// console.log(str.includes("R")) //true or false value return
// console.log(str.lastIndexOf("course"))
// console.log(str.match(/Javascript/i));
// console.log(str.matchAll()) ?????
// console.log(Array.from(str));
// console.log(str.split(","));

// let str = "hello javaScript \"welcome\" to javascript\n course";
// console.log(str);
// let str = "Hello\t world";
// console.log(str);

// let str = "hello javaScript welcome to javascript course";

// // console.log(str.matchAll("javascript"));
// console.log(str.toreverse());

// let dive = document.querySelector(".watch");

// function dateTime() {
//   let time = new Date().toLocaleTimeString();
//   dive.innerHTML = time;
// }
// setInterval(dateTime);

// let str = "Hello javaScript welcome to java script course";
// console.log(Array.from(str));
// console.log(str.split(","));

// let num = 48.4;
// console.log(parseInt(num));
// console.log(parseFloat(num), typeof num);

// let num = new Number(400);
// console.log(num);

// let num = Number.MAX_SAFE_INTEGER
// let num = Number.MIN_SAFE_INTEGER
// let num = Number.MIN_VALUE
// let num = Number.NEGATIVE_INFINITY
// let num = Number.POSITIVE_INFINITY
// console.log(num);

// *********************************** Math Objects ***********************************

// console.log(Math.trunc(42.9))
// let math = new Math;
// console.log(math)

//

// let min = 10;
// let max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1) + min));

// console.log(Math.round(Math.random() * 10 + 1));

// const str = "JavaScript";
// console.log(str.slice(-5, -0));

// let str = "Hello javaScript welcome to world best javaScript course";
// console.log(str.match(/javascript/ig));
// console.log(str.match(/javascript/i));
// const country = "Pakistan";
// console.log(country.padStart(40).length);
// console.log(country.trim().length);
// let country = "Pakistan";
// console.log(Array.from(country));
// const str = "Hello World";
// console.log(str.repeat());

// let min = 40;

// let div = document.querySelector(".watch");

// const dateTime = () => {
//   let time = new Date().toLocaleTimeString();
//   div.innerHTML = time;
// };

// setInterval(dateTime);

// let num1 = -4.9;
// let num2 = -4.9;

// console.log(Math.floor(num1));
// console.log(Math.trunc(num2)); ✔

// let arr = ["Faheem", "wasid", "shehzad", "adil"];
// arr.push("sohail", "shahzaib");
// let include = arr.includes("Adil");

// *********************************** Date and Time ***********************************

// let currDateTime = new Date();

// ++++++++++++ Getting Method ++++++++++++
/*
console.log(currDateTime.getDate());
console.log(currDateTime.getMonth());
console.log(currDateTime.getFullYear());
console.log(currDateTime.getDay());
console.log(currDateTime.getDate());
console.log(currDateTime.getHours());
console.log(currDateTime.getMinutes());
console.log(currDateTime.getSeconds());
*/

// ++++++++++++ Set Method ++++++++++++
/*
let setDate = new Date(1729243780372);
console.log(currDateTime.setDate(18));
console.log(setDate);
let setMonth = new Date(1752831045122);
console.log(currDateTime.setMonth(18));
console.log(setMonth);
console.log(currDateTime.setFullYear(2026));
let setyear = new Date(1791883991921);
console.log(setyear)
console.log(currDateTime.setHours(4));
let setHour = new Date(1728819284512);
console.log(setHour);
console.log(currDateTime.setMinutes(30));
let setMinut = new Date(1728811801310);
console.log(setMinut)
console.log(currDateTime.setSeconds(30));
let setsecond = new Date(1728812250393);
console.log(setsecond);

let dateTime = Date.now();
console.log(dateTime);
let newDate = new Date(1728812425349);
console.log(newDate);

let currDate = new Date();
console.log(String(currDate));
*/


// *********************************** Arrays ***********************************

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8);
// console.log(arr);
// console.log(arr2);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// [a, b, c, d, e, f, g, h, i] = arr;
// console.log(h);

// ++++++++++++ Concate with concate method ++++++++++++

// let student = ["Faheem", "wasid", "shehzad", "shahzaib", "adil"];
// let student2 = ["sohail", "saqib"];
// let students = student.concat(student2);
// console.log(students);

// ++++++++++++ Concate with spread method ++++++++++++

// let student= ["Faheem", "wasid", "shehzad", "shahzaib", "adil"];
// let student2 = ["sohail", "saqib"];
// let students = [...student, ...student2];
// console.log(students);

// ++++++++++++ Adding values in Array ++++++++++++

// let student = ["Faheem", "wasid", "shehzad", "shahzaib", "adil"];
// student.push("Sohail");
// student.unshift("Rizwan");
// student.pop();
// student.shift();
// console.log(student);

// let student = [
//   "Faheem",
//   "wasid",
//   "shehzad",
//   "shahzaib",
//   "adil",
//   "sohail",
//   "rizwan",
// ];

// let student2 = ["muzamil", "nizam", "inam"];
// console.log(student.includes("Wasid"));
// console.log(student.at(-2));

// console.log("A", student.slice(0, 4));
// console.log("B", student.splice(0, 4));
// console.log(student);

// console.log(student.lastIndexOf("sohail"));
// console.log(student[3]);
// let newArr = [...student];
// let newArr = student.toString();
// let newArr = student.join();
// let fullArr = student.push(student2);

// console.log(newArr, typeof newArr);
// console.log(fullArr)

// let arr = [1, [2, [3], 4, 5, 6, 7]];
// console.log(arr.flat(Infinity))
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// let score4 = 400;

// let fullArr = Array.of(score1, score2, score3, score4);
// console.log(fullArr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 3];
// // const result = arr.forEach((currElem, occum) => {
// //   console.log(currElem);
// // });
// let str = "Pakistan"

// console.log(Array.isArray(arr));

