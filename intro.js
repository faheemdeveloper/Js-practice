// Convert Number to in String
/* let num = 28;
 console.log(num, typeof String(num));
 console.log(num, typeof (num + "")); */

// Convert String to a Number
/* let country = "Pakistan";
console.log(country, typeof Number(country));
console.log(country, typeof +country);
console.log(country, typeof parseInt(country));
let num = 24.2;
console.log(parseInt(num));
console.log(parseFloat(num)); */

// let num = 0.1  + 0.2;
// console.log(num.toFixed(1))

// Logic Building using logical Operator
// let age = 19;
// let drivingLisence = false;
// const logic = age >= 18 && drivingLisence ;
// console.log(logic)

// let age = 13;
// if (age >= 18) {
//   console.log("Your Eligible for Vote");
// } else {
//     console.log("your not Eligible for Vote")
// }

// let age = 19;
// let drivingLisence = false;

// if (age >= 18) {
//   if (drivingLisence) {
//     console.log("Your Eligible for vote");
//   } else {
//     console.log("Your are abou 18 but driving lisence is not")
//   }
// } else {
//   console.log("your not Eligible for Vote");
// }

// let sum = 0;

// for (let num = 1; num <= 10; num) {
//   sum = sum + num;
// }

// console.log(sum);

// Functions
// Normail Function

/* function sum(a,  b) {
    return a + b
}

console.log(sum(9, 3)) */

// Function Expression
/* let sum = function (a,  b) {
    return a + b
}
 console.log(sum(3, 8))*/

// Function Anonymos
/* let sum = function (a, b) {
  return a + b;
};

console.log(sum(3, 9)); */

// Fat Arrow Function
/* let sum = (a, b) => {
  return a + b;
};

console.log(sum(5, 2)); */

/* let result = (a, b) => {
  let result = `the sum of ${a} and ${b} is ${a + b}`;
  console.log(result);
};

result(3, 4); */

// Anonymos Function
/* (function(a, b) {
    console.log( a + b);
})(4, 5)

let sum = (function(a, b) {
    // console.log(a + b);
    return a + b
})

console.log(sum(5, 9))

let sum = function (a, b) {
  // console.log(`The sum of ${a} and ${b} is ${a + b}`);
  return `The sum of ${a} and ${b} is ${a + b}`;
};

console.log(sum(5, 9)); */

// default Parameter
/* let sum = (a, b = 3) => {
    return a + b
}

console.log(sum(5)) */

// Arrays

/* let arr = ["Faheem", "shehzad", "wasid", "sohail", "rizwan", "adil"];

let addValOnLast = arr.push("Shahzaib");
let delFromLast = arr.pop("Shahzaib");
const addValOnFirst = arr.unshift("Shahzeb");
const delFromFirst = arr.shift();

let slice = arr.slice(1, 4)
let splice = arr.splice(0, 1, "Sohail")
console.log(arr); 

let arr = ["Faheem", "shehzad", "wasid", "sohail", "rizwan", "adil"];
let cunstructor = new Array(
  "Faheem",
  "shehzad",
  "wasid",
  "sohail",
  "rizwan",
  "adil"
);
let newArr = arr.push(...["basit", "sajid"]);
console.log(cunstructor); */

//  Array Methods
// ForEach Method and Map Method
/*
let arr = ["Faheem", "shehzad", "wasid", "sohail", "rizwan", "adil"];

let result = arr.map((currElem, idx, arr) => {
    // console.log(`${currElem} ${idx} ${arr}`);
  return `${currElem} ${idx}`;
});

console.log(result, typeof result) */

// find Method and Filter Method
/*
let number = [1, 2, 3, 4, 5, 6, 7, 8];

let result = number.filter((currElem) => {
  return currElem >= 2;
});

console.log(result); */

// Reduce Method

// let arr = [1, 3];

// const result = arr.reduce((occum, currElem) => {
//   return occum + currElem;
// });

// console.log(result);

// Include Method
/*
let arr = [1, 2, 3, 4, 5];
const result = arr.includes();
console.log(result);

let arr = [
  "wasid",
  "sohail",
  "shehzad",
  "shahzaib",
  "adil",
  "saqib",
  "basit",
  "rizwan",
];

console.log(arr.includes("nizam")); */
/*
let value = 4;
let arr = [1,2, 3, 4, 5, 4, 6, 3, 4, 5, 6, 7, 2];

let result = arr.filter((currElem) => {
    return currElem != value;
})

console.log(result)

let obj = [
  { proName: "smartWatch", price: 900 },
  { proName: "Tablet", price: 700 },
  { proName: "Iphone 14", price: 300 },
  { proName: "Sumsang Ultra", price: 100 },
  { proName: "Laptop", price: 200 },
];

let result = obj.filter((currElem) => {
  return currElem.price >= 400;
});

console.log(result); */

// new Method and sort Method
/*
let arr = ["faheem", "wasid", "sohail", "shehzad","shahzaib","shahzain", "rizwan"];

let num = [1, 2, 3, 4, 5, 6, 7];

console.log(new Set(num))
console.log(num)

let abc = ["a", "c", "b", "e", "d", "g", "f", "h", "i"];

let reverse = abc.reverse();
console.log(reverse)
let sortedValue = reverse.sort()
console.log(sortedValue) */

// let num = [1, 2, 3, 4, 5, 6, 7];

// num.sort((a,b) => {
//   if(a > b) return -1;
//   if(b > a) return 1;
// });
// console.log(num)

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers.reverse())

// Strings
let str = "Hello JavaScript welcome to world best Javascript";

// let checkIndexOfWord = str.indexOf("J");
// let lastIndexOf = str.lastIndexOf("J");
// let checknumber = str.includes("welcome");
// let search = str.search(/j/i);  /*his also Return index*/
// let match = str.match(/javascript/i);
// const matchAll = str.matchAll("Java")
// const split = str.split("")
// const withspread = [...str]

// console.log(checkIndexOfWord);
// console.log(lastIndexOf);
// console.log(checknumber);
// console.log(search);
// console.log(match)
// console.log(...matchAll)
// console.log(split)
// console.log(withspread)

// let country = "Pakistan";
// let strArr = country.split(",").reverse().join
// console.log(strArr)

// for(let char = 97 ; char <= 122 ; char++) {
//   console.log(String.fromCharCode(char))
// }

// console.log(Math.round(4.5)); 
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.abs(4.5));
// console.log(Math.trunc(4.9));
// console.log(Math.sqrt(7).toFixed(1));

