const name = "Faheem";
const age = 22;

const person = {name : name, age : age};
console.log(person)

const user = {
  name: "Faheem",
  age: 22,
};

const myName = user;
const  {name, age} = user;

console.log(`my name is ${name} and my age is  ${age}`);

const user = {
  myName: "Faheem",
  age: 22,
};

let numbers = [...number1, ...number2];
console.log(numbers);

let student = ["Faheem", "wasdi", "shehzad"];
student.push(...["adil", "sohail"]);

console.log(student);

let country = "Pakistan";
console.log(country.split(""));

console.log([...country]);

let myName = "Faheem";
let withSpace = myName.padStart(18, "-");
let endSpace = myName.padEnd(15);
console.log(withSpace);
console.log(endSpace.length);
console.log(myName.length);

const obj1 = {a : 10, b: 20, c: 50};
const obj2 = {c : 30, d: 50};

let newObj = {...obj1 ,...obj1,};
console.log(newObj);

let person = { naem: "Faheem", age: 22 };
let enteries = Object.entries(person);
console.log(enteries);

let newPerosn = Object.fromEntries(enteries);
console.log(newPerosn);

const mxNumber = Number.MAX_SAFE_INTEGER;
console.log(mxNumber);
// console.log(mxNumber);

let favNum = undefined;
userFavNum = favNum ?? 10;
console.log(userFavNum)
const myName = user.myName;
const age = user.age;

console.log(myName, age)

let students = ["Faheem", "wasid", "shehzad", "shahzaib", "adil"];

let NewStudents = [...students];

console.log(students)
console.log(NewStudents)

let number1 = [1, 2, 3];
let number2 = [4, 5, 6];
