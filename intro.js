// Index Of method
// Ye eik String main world ke first letter ka Index number nikal kar deta hai shoro se

/*let course = "JavaScript";
 console.log(course.indexOf("Script"));*/

//  Array.from converting String In Array
// Ye String ko Array main convert karta hai

/*const course = "JavaScript";
const newArr = Array.from(course);

const mapMathod = newArr.map((currElem, index, course) => {
    console.log(`${currElem} ${index} ${course}`);
});*/

// last Index Of Method
// Ye agar string main do word simplur hun to unme last wale word ke first letter ka index number nikal kar deta hai
/*
let info = "Hello, JavaScript My Name is Muhammad Faheem and im JavaScript learning JavaScript Right Now";
let newArr = Array.from(info);
console.log(newArr)

console.log(info.indexOf("JavaScript", 64));
console.log(info.lastIndexOf("JavaScript"));

let newMap = info.map((currElem, index) => {
    // console.log(`${currElem} ${index}`)
    let newArr = Array.from(info)
});
*/

// Search Method
// Ye bi eik index number deta hai hai or ye case secitivty ko nikal kar deta hai i ki madad se
/*
let info = "Hello, JavaScript My Name is Muhammad Faheem and im JavaScript learning JavaScript Right Now";
console.log(info.search(/Javascript/i))

const myName = "hello my Name is Faheem";
console.log(myName.search(/faheem/i));
*/

// Match Method
// ye string main matching words ko nikalta hai with global flag or i expression
/*
let text = "Hello, JavaScript My Name is Muhammad Faheem and im JavaScript learning JavaScript Right Now";
let result = text.match(/JavaScript/);

console.log(result);

let text = " hello gays this my learning JavaScript course ";

console.log(text.match(/javaScript/i))

const text = "Hello World im learning javaScript World course right now!";
console.log(text.match(/world/i));

let text = "Hello JavaScript, welcome to world best JavaScript course";
console.log(text.match(/javascript/gi));
*/

// Match All
/*
let text = "Hello JavaScript, welcome to world best JavaScript course";
console.log(text.matchAll("javaScript"));
// console.log(result)  
*/

// Include Method
/*
let text = "Hello JavaScript, welcome to world best JavaScript course";
console.log(text.includes("JavaScript"));
*/

// Start With Method
/*
let text = "Hello JavaScript, welcome to world best JavaScript course";

console.log(text.startsWith("Hello"));
*/

// Ends Wtih Method
/*
let text = "Hello JavaScript, welcome to world best JavaScript course";
console.log(text.endsWith("course"));
*/

// .at Method
/*
let text = "Hello JavaScript, welcome to world best JavaScript course";
console.log(text.at(-5));
*/

// Split Method
/*
let str = "apple,orange, banana";
let result = str.split(",").reverse()
// console.log(str);
console.log(result);

let str = "apple, banana, orange, Nashpati, patato";
let arrStr = str.split(",").reverse();

console.log(str);
console.log(arrStr);
*/