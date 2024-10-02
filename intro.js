// let obj3 = {
//   myName: "Faheem",
//   age: 22,
//   marks: 502,
//   grade: "D",
// };

// console.log(obj3, typeof obj3)

// let myName = "Faheem";
// let age = 22;
// let marks = 502;
// let grade = "D";

// let obj = {myName : myName, age : age, marks : marks, grade : grade};
// let obj2 = {myName, age, marks, grade};

// console.log(obj, typeof obj);
// console.log(obj2, typeof obj2);

// let student = ["Faheem", "wasid", "shehzad", "sohail", "adil"];

// // console.log(student[4])
// [first, second, third, four, five] = student;
// console.log(five);

// let a = 10;
// let b = 40;

// console.log("a =", a, "b =", b);
// [a, b] = [b, a];
// console.log("a =", a, "b =", b);

// let obj = {
//   myName: "Faheem",
//   age: 22,
//   marks: 502,
// };

// // const {myName, age, marks} = obj;
// // console.log(marks)

// const {myName : fullName, age : fullage, marks} = obj;

// console.log(fullage);

// let student = ["faheem", "wasid", "shehzad", "shahzaib"];
// let newStudent = ["adil", "saqib", "sohail"];
// let fullArray = [...student, ...newStudent];
// console.log(fullArray)

// let student = ["Faheem", "wasid", "shehzad", "shahzaib", "sohail"];
// // student.push("adil");
// student.push(...["adil", "saqib", "basit", "rizwan"]);

// console.log(student);

// let sum = (a, b, c, d, e, f) => {
//   return a + b + c + d + e + f;
// };

// console.log(sum(1, 2, 3, 4, 5, 6));

// let sum = (...numbers) => {
//     return numbers.reduce((occum, currElem) => {
//         return occum + currElem;
//     });
// };

// console.log(sum(1, 2, 3, 4, 5));

// function sum(...numbers) {
//   return numbers.reduce((occum, currElem) => occum + currElem);
// }

// console.log(sum(2, 3, 8));

// let country = "pakistan";
// let paddStart = country.padStart(15,"-");
// let paddEnd = country.padEnd(15, "-");

// console.log(paddStart, paddStart.length);
// console.log(paddEnd, paddEnd.length);

// let obj1 = {a : 10, b : 20, c : 30};
// let obj2 = {c : 40, d : 50, e : 60};

// let newObj = {...obj1, ...obj2};
// console.log(newObj);

// let StudentData = {
//     myName : "Faheem",
//     age : 22,
//     marks : 502,
//     grade : "D",
// };

// let StudentAddress = {
//     city : "Kohat",
//     zipCode : 12345,
//     village : {
//         Home : true,
//         dem : "yess",
//     },
// };

// let personData = {...StudentData, ...StudentAddress};

// console.log(personData);

// let arr = [1, [2, [3, [4, 5, 6], 7], 8], 9];
// let arr2 = [10, 11, 12, 13, 14];
// let fullArr = [...arr, ...arr2];
// console.log(fullArr.flat(4));

// let obj = {
//   myName: "Faheem",
//   age: 22,
//   marks: 502,
// };

// let objToArr = Object.entries(obj);
// console.log(objToArr);
// let toObject = Object.fromEntries(objToArr);
// console.log(toObject);

// let country = "       Pakistan";
// let newCountry = "Pakistan          ";
// let cuttStartSpace = country.trimStart();
// console.log(country, country.length);
// console.log(cuttStartSpace, cuttStartSpace.length);

// console.log(newCountry, newCountry.length);
// let cuttEndSpace = newCountry.trimEnd();
// console.log(cuttEndSpace, cuttEndSpace.length);

// let a = 50;
// let b = 20;

// console.log(a ?? b);

// Opitonal Chaining Opertor

// let obj = {
//     myName : "Faheem",
//     age : 22,
//     address : {
//         city : "Kohat",
//         zipCode : 12345,
//     },
// };

// // let newOBj = obj.address ? obj.address.newcode : "City is not Present";
// let city = obj.address ?.zipCode ?? "City is not Present";

// console.log(city)

// let obj = {
//   myName: "Faheem",
//   age: 22,
//   marks: 502,
//   grade: "D",
//   city : "Kohat",
// };

// console.log(obj.hasOwnProperty("myName"));
// console.log(obj.hasOwnProperty("city"));

// let arr = ["Faheem", "shehzad", "wasid", "shahaib", "sohail"];
// console.log(arr);
// // console.log(arr.toReversed())
// console.log(arr.toSorted());


// let numbers = [1,2 ,3 ,4, 5, 6, 7, 8, 5];

// let newNumber = numbers.findLastIndex((currElem) => {
//     return currElem;
// });

// console.log(newNumber);