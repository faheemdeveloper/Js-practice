// // let myName = "Faheem";
// // const age = 22;
// // let marks = 502;
// // let myNum;
// // let num = null;
// // console.table([myName, age, marks, myNum]);

// // console.log(typeof num)

// // function exampleLet() {
// //   let x = 10;

// //   if (true) {
// //     let x = 20; // Block scope, new variable inside the block
// //     console.log(x); // 20
// //   }

// //   console.log(x); // 10 (original value outside the block)
// // }

// // exampleLet();

// // function exampleVar() {
// //   var x = 10;

// //   if (true) {
// //     var x = 20; // Same variable, re-declared within the same function
// //     console.log(x); // 20
// //   }

// //   console.log(x); // 20 (still 20 because of function scope)
// // }

// // exampleVar();

// // let score = "faheem";
// // let toStr = Number(score);

// // console.log(score, typeof score);
// // console.log(toStr, typeof toStr);

// // let num = 4;
// // let toBol = Boolean(num);
// // console.log(num, typeof num);
// // console.log(toBol, typeof toBol);

// // ********************* Operations  *********************
// /*
// let value = 3;
// let negVal = -value;
// // console.log(negVal);

// // console.log(+"Faheem")

// let num1, num2, num3;
// num1, num2, (num3 = 2 + 2);
// console.log(num2);

// let myName = "Faheem";
// let myAge = 22;
// let marks = 502;
// let Grade = "D";

// console.table([myName, myAge, marks, Grade]);

// console.log(3 + 5 + "8");
// console.log("3" + 5 + 8);
// console.log(true + "4" + 3);
// console.log("4" + 3 + false);
// console.log(true - "3");
// console.log(false - "4" + 4);
// let value = 4;
// let negValue = +value;
// console.log(negValue)

// var age = 22;
// var age = 22 + 2;
// console.log(age);

// let age = 22;
// age + 3;
// console.log(age)

// const age = 22;
// age = 22 + 3;
// console.log(age);

// let a = 5;
// let b = 3;
// a += 4;
// console.log(a + b);

// let myName = "M_";
// myName += "Faheem";
// console.log(myName);
// */
// // *********************** Arithematic Operators ***********************
// /*
// let a = 3;
// let b = 8;
// [a, b] = [b, a]
// let devide = a / b;
// console.log("a =", a, "b =", b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);
// console.log(devide.toFixed(1))
// console.log("a ** b =", a ** b);
// */
// // *********************** Ternery Operators ***********************
// /*
// let a = 8;
// let b = 3;
// console.log("a =", a, "b =", b);

// let age = 19;
// let license = true;
// let result = age >= 18 && license;
// console.log(result);
// */
// // *********************** Comparision Operators ***********************
// /*
// let a = 8;
// let b = 9;
// console.log("a =", a, "b =", b);

// console.log("a == b", a == b);
// console.log("a === b", a === b);
// console.log("a != b", a != b);
// console.log("a !== b", a !== b);
// console.log("a > b", a > b);
// console.log("a < b", a < b);
// console.log("a >= b", a >= b);
// console.log("a <= b", a <= b);
// */

// // let num = 45;
// // console.log(typeof String(num));
// // console.log(typeof (num + ""));
// // let str = "Faheem";
// // console.log(typeof Number(str));
// // console.log(typeof +(str));

// // let numbers = 45.3;
// // console.log(parseFloat(numbers));
// // console.log(parseInt(numbers));

// // let num = 0.1 + 0.2;
// // console.log(num.toFixed(1));

// // let str = "Faheem";
// // console.log(isNaN(str));

// // let isFollow = true;
// // let toStr = +(isFollow);
// // console.log(isFollow, typeof isFollow);
// // console.log(toStr, typeof toStr);

// // let num = 0;
// // let toBool = Boolean(num);
// // console.log(num, typeof num);
// // console.log(toBool, typeof toBool);

// // let score = 63;

// // let result = (score >= 60 && "Pass") || "Fail";
// // console.log(result);

// // let num = undefined;
// // let num2 = 40;

// // let result = num ?? num2;
// // console.log(result);

// // const { length } = "JavaScript";
// // console.log(length);

// // let arr = ["Faheem", "shehzad", "wasid"];
// // [, , third] = arr;
// // console.log(third);
// // console.log(arr);

// // let a = 29;
// // let b = 20;
// // [a, b] = [b, a];
// // console.log(a, b);

// // const obj = {
// //   myName: "Faheem",
// //   age: 22,
// //   marks: 502,
// //   grade: "D",
// // };
// // const {myName, age, marks, grade} = obj;
// // console.log(myName)

// // const obj = {
// //   myName: "Faheem",
// //   age: 22,
// //   marks: 502,
// //   grade: "D",
// // };
// // const { myName: fullName, age, marks, grade } = obj;
// // console.log(fullName);

// // let arr = ["Faheem", "shehzad", "wasid", "sohail"];
// // let newArr = [...arr];
// // console.log(newArr);

// // let arr = ["Faheem", "shehzad", "wasid", "sohail"];
// // let arr3 = ["adil", "saqib"];
// // let fullArr = [...arr, ...arr3];
// // console.log(fullArr);

// // let sum = (...number) => {
// //   return number.reduce((occum, currElem) => {
// //     return occum + currElem;
// //   });
// // };

// // console.log(sum(4, 3, 4, 3));

// // let arr = [1, [2, [3, [4, [5], 6], 7], 8], 9];
// // console.log(arr.flat(4));

// // let country = "Pakistan";
// // console.log(country);

// // let obj1 = { a: 10, b: 30 };
// // let obj2 = { c: 40, d: 50 };
// // let fullObj = { ...obj1, ...obj2 };
// // console.log(fullObj);

// // let num = 1;
// // let toBool = Boolean(num);
// // console.log(toBool);
// //
// // ************************** Comparison Operator **************************
// // console.log(null > 0);
// // console.log(null == 0);
// // console.log(null >= 0);

// // let myName = "Faheem";

// // let myfullName = myName;
// // myfullName = "M_Faheem";

// // console.log(myfullName);
// // console.log(myName);

// // let myName = new String("Faheem");
// // console.log(myName, typeof myName);

// // let num = new Number(400);
// // console.log(num)

// // let number = 123.8966;

// // console.log(number.toPrecision(3));

// // let number = 10000000;
// // console.log(number.toLocaleString("en-US"));

// // let myemail = "info@gmail.com";
// // let myEmail = myemail;

// // myEmail = "faheem@gmail.com";
// // console.log(myemail);
// // console.log(myEmail);

// // let obj = {
// //   myName: "Faheem",
// //   email: "info@gmail.com",
// // };

// // let myOBj = obj;
// // obj.email = "faheem@gmail.com";
// // console.log(obj);
// // console.log(myOBj);

// // let str = "hello javaScript welcome\nto javascript course";

// // console.log(str.toLowerCase())
// // console.log(str.replace("s", "S"));
// // console.log(str.slice(0, 6));
// // console.log(str.lastIndexOf("c"));
// // console.log(str.charAt(7));
// // console.log(str.includes("R")) //true or false value return
// // console.log(str.lastIndexOf("course"))
// // console.log(str.match(/Javascript/i));
// // console.log(str.matchAll()) ?????
// // console.log(Array.from(str));
// // console.log(str.split(","));

// // let str = "hello javaScript \"welcome\" to javascript\n course";
// // console.log(str);
// // let str = "Hello\t world";
// // console.log(str);

// // let str = "hello javaScript welcome to javascript course";

// // // console.log(str.matchAll("javascript"));
// // console.log(str.toreverse());

// // let dive = document.querySelector(".watch");

// // function dateTime() {
// //   let time = new Date().toLocaleTimeString();
// //   dive.innerHTML = time;
// // }
// // setInterval(dateTime);

// // let str = "Hello javaScript welcome to java script course";
// // console.log(Array.from(str));
// // console.log(str.split(","));

// // let num = 48.4;
// // console.log(parseInt(num));
// // console.log(parseFloat(num), typeof num);

// // let num = new Number(400);
// // console.log(num);

// // let num = Number.MAX_SAFE_INTEGER
// // let num = Number.MIN_SAFE_INTEGER
// // let num = Number.MIN_VALUE
// // let num = Number.NEGATIVE_INFINITY
// // let num = Number.POSITIVE_INFINITY
// // console.log(num);

// // *********************************** Math Objects ***********************************

// // console.log(Math.trunc(42.9))
// // let math = new Math;
// // console.log(math)

// //

// // let min = 10;
// // let max = 20;

// // console.log(Math.floor(Math.random() * (max - min + 1) + min));

// // console.log(Math.round(Math.random() * 10 + 1));

// // const str = "JavaScript";
// // console.log(str.slice(-5, -0));

// // let str = "Hello javaScript welcome to world best javaScript course";
// // console.log(str.match(/javascript/ig));
// // console.log(str.match(/javascript/i));
// // const country = "Pakistan";
// // console.log(country.padStart(40).length);
// // console.log(country.trim().length);
// // let country = "Pakistan";
// // console.log(Array.from(country));
// // const str = "Hello World";
// // console.log(str.repeat());

// // let min = 40;

// // let div = document.querySelector(".watch");

// // const dateTime = () => {
// //   let time = new Date().toLocaleTimeString();
// //   div.innerHTML = time;
// // };

// // setInterval(dateTime);

// // let num1 = -4.9;
// // let num2 = -4.9;

// // console.log(Math.floor(num1));
// // console.log(Math.trunc(num2)); ✔

// // let arr = ["Faheem", "wasid", "shehzad", "adil"];
// // arr.push("sohail", "shahzaib");
// // let include = arr.includes("Adil");

// // *********************************** Date and Time ***********************************

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

// // *********************************** Arrays ***********************************
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8);
console.log(arr);
console.log(arr2);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
[a, b, c, d, e, f, g, h, i] = arr;
console.log(h);

// ++++++++++++ Concate with concate method ++++++++++++
/*
let student = ["Faheem", "wasid", "shehzad", "shahzaib", "adil"];
let student2 = ["sohail", "saqib"];

let students = student.concat(student2);
console.log(students);

++++++++++++ Concate with spread method ++++++++++++

let student= ["Faheem", "wasid", "shehzad", "shahzaib", "adil"];
let student2 = ["sohail", "saqib"];
let students = [...student, ...student2];
console.log(students);

++++++++++++ Adding values in Array ++++++++++++

let student = ["Faheem", "wasid", "shehzad", "shahzaib", "adil"];
student.push("Sohail");
student.unshift("Rizwan");
student.pop();
student.shift();
console.log(student);

let student = [
  "Faheem",
  "wasid",
  "shehzad",
  "shahzaib",
  "adil",
  "sohail",
  "rizwan",
];

let student2 = ["muzamil", "nizam", "inam"];
console.log(student.includes("Wasid"));
console.log(student.at(-2));

console.log("A", student.slice(0, 4));
console.log("B", student.splice(0, 4));
console.log(student);

console.log(student.lastIndexOf("sohail"));
console.log(student[3]);
let newArr = [...student];
let newArr = student.toString();
let newArr = student.join();
let fullArr = student.push(student2);

console.log(newArr, typeof newArr);
console.log(fullArr)

let arr = [1, [2, [3], 4, 5, 6, 7]];
console.log(arr.flat(Infinity))
let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

let fullArr = Array.of(score1, score2, score3, score4);
console.log(fullArr);

let arr = [1, 2, 3, 4, 5, 6, 7, 3];
const result = arr.forEach((currElem, occum) => {
  console.log(currElem);
});
let str = "Pakistan"

console.log(Array.isArray(arr));

let student = [
  "Faheem",
  "wasid",
  "shehzad",
  "shahzaib",
  "adil",
  "sohail",
  "rizwan",
];

console.log(student.toReversed());

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let result = arr.reduce((currElem, index) => {
  return currElem + index;
});
*/
// console.log(result);
// // *********************************** objects ***********************************
/*
let sym = Symbol("myKey1")
const age = "myAge"
let obj = {
  myName: "Faheem",
  age: 22,
  loca: "Pakistan",
  isLoggin: false,
  marks: 502,
  grade: "D",
};

// console.log(` Hello gay ${age} is ${obj.myAge}`)

// console.log(`Hello gays ${obj[sym]}`)

obj.greeting = function () {
  console.log("Hello Gays this sobject function");
};

obj.greetingTwo = function () {
  console.log(`Hello gays my name is ${this.myName}`)
}
console.log(obj.greetingTwo());

let userProfile = {
  myName: "Faheem",
  greetUsers: {
    userProfile1: {
      userName: "wasid",
      userAge: 20,
    },
  },
};

console.log(userProfile.greetUsers.userProfile1.userName);
console.log(userProfile.myName.greetUsers.userProfile1?.userName ?? "value is not present");

let obj = {
  myName: "Faheem",
  age: 22,
  loca: "Pakistan",
  isLoggin: false,
  marks: 502,
  grade: "D",
};

console.log("object key =", Object.keys(obj), "and Object values", Object.values(obj));
let toArray = Object.entries(obj);
console.log(toArray);
let toObj = Object.fromEntries(toArray);
console.log(toObj);

let obj1 = { a: "a", b: "b" };
let obj2 = { c: "c", d: "d" };
let fullArr = Object.assign({}, obj1, obj2);
let fullArr = { ...obj1, ...obj2 };      
console.log(fullArr);


let obj = {
  myName: "Faheem",
  age: 22,
  loc: "Kohat",
  grade: "D",
};

console.log(Object.entries(obj));
obj["job"] = "Web Developer"
obj["myName"] = "M_Faheem"
console.log(obj)
console.log(obj);

obj.greet = () => {
  console.log(`myName is ${obj.myName}`);
};

console.log(obj.greet());

let score1 = 200;
let score2 = 300;
let score3 = 400;
let score4 = 500;
let score5 = 600;
let score6 = 700;

let fullarr = Array.of(score1, score2, score3, score4, score5, score6);
console.log(fullarr);
*/

// // *********************************** Functions ***********************************
/*
function addsum(num1, num2) {
  return `the sum of ${num1} and ${num2} is ${num1 + num2}`;
}

console.log(addsum(3, 4));

function one() {
  const username = "Faheem";
  function Two() {
    const course = "JavaScipt";
    console.log(course);
    console.log(username);
  }
  // console.log(course);
  Two();
}
one();

let userName = "Faheem";
function userLoggedIN() {
  return `The userName is ${userName}`;
}

console.log(userLoggedIN());

function userJustLoggedIn(username) {
  if (username === undefined) {
    console.log("please enter the username");
    return;
  }
  return `${username} is just logged in`;
}

console.log(userJustLoggedIn("wasid"));

function theSumOfMultiNumbers(...num) {
  return num;
}
console.log(theSumOfMultiNumbers(40, 22, 400, 200, 500, 600));

let user = {
  myName: "Faheem",
  price: 200,
};

function theSum(anyObject) {
  return `user name is ${anyObject.myName} and pirce is ${anyObject.price}`;
}

console.log(theSum(user));

function objectFunction(Obj) {
  return `the user name is ${Obj.myName} and price is ${Obj.price}`;
}

console.log(
  objectFunction({
    myName: "Faheem",
    price: 200,
  })
);

let arr = [100, 200, 300, 400, 500, 600];

function arrFunction(ArrHere) {
  return ArrHere[2];
}
console.log(arrFunction(arr));

function arrFunction(arrF) {
  return arrF;
}
console.log(arrFunction([100, 200, 300, 400, 500, 600]));

function checkName(name) {
  return `Hello ${name} Welcome to my Website`;
}

console.log(checkName("Faheem"));

let checkFunc = (name1) => {
  console.log(`Hello ${name1} Welcome to my Website`);
};

checkFunc("wasid");

(function (a, b) {
  console.log(a + b);
})(5, 5);

const theSumOfTwoNumbers = (function (a, b) {
  return a + b;
})

console.log(theSumOfTwoNumbers(5, 3));

const TheSumOf = (a, b) => {
  return a + b;
};

console.log(TheSumOf(3, 4));

function checkUsername(username) {
  if (!username) {
    console.log("please Enter the username");
    return;
  }
  return `${username} is just logged in`;
}

console.log(checkUsername("Wasid"));
*/
// *********************************** Scops ***********************************
/*
let a = 100;
const b = 200;
var c = 300;

if(true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("let inner:", a)
  console.log("const inner:", b)
  console.log("var inner:", c)
}
console.log("let outer: ", a);
console.log("const outer: ", b);
console.log("var outer: ", c);

function one() {
  let username = "Faheem";
  function Two() {
    let website = "Youtube.com";
    console.log(username)
    // console.log(website)
  }
  // console.log(website);
  Two();
}

one();

if (true) {
  const usernmae = "faheem";
  if (usernmae === "faheem") {
    const website = "youtube";
    console.log(`${usernmae} ${website}`);
  }
  // console.log(website)
}
// console.log(usernmae)

const obj = {
  myName: "Faheem",
  age: 22,
  greet: function () {
    console.log(this);
  },
};

console.log(obj.greet());

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
*/

// *********************************** Arrow Function ***********************************
/*
let chai = (num, num2) => {
  return `the sum of ${num} and ${num2} is ${num + num2}`;
};
console.log(chai(3, 4));

let sum = (num, num2) => num + num2;

console.log(sum(3, 9));

let arr = [1, 2];
let sumOfArr = arr.reduce((ocum, currElem) => ocum + currElem);
console.log(sumOfArr)

let sum = (...num) => {
  return num.reduce((ocum, currElem) => {
    return (ocum = ocum + currElem);
  }, 0);
};

console.log(sum(3, 8, 9));

let thisKeyWord = () => {
  console.log(this);
};

thisKeyWord()

let sum = (num, num2) => ({ username: "Faheem" }, num + num2);
console.log(sum(4, 5));

let objectFunction = (newObject) => {
  return newObject;
};

console.log(
  objectFunction({
    myName: "Faheem",
    age: 22,
    marks: 502,
    job: "Web Developer",
  })
);

let obj = {
  myname: "Faheem",
  job: "Web developer",
  obj2: {
    loc: "kohat",
    village: "Gandiayly",
  },
};

obj.obj2["age"] = 22;
console.log(obj.obj2);

let sumof = (num) => {
  return `Hello ${num} Welcome to my Website`;
};
console.log(sumof("wasid"));

let sum = ((num) => {
  console.log(`Hello ${num} Welcome to my webite`);
})("faheem");

let sum = (a, b) => {
  return `the sum of ${a} and ${b} is ${a + b}`;
};
console.log(sum(4, 4))

(function one() {
  console.log (`function one is connected`);
})();

(function two(num) {
  console.log( `Hello ${num} welcome to my website`)
})("wasid");

let theSum = (num) => {
  let website = "You tube";
  console.log(website);
  return `Hello ${num}`;
};

console.log(theSum("Faheem"));
*/
/*
let score = prompt("Enter you number and see your Grade");
let Grade;
if (score >= 89 && score <= 100) {
  Grade = "A";
} else if (score >= 70 && score <= 88) {
  Grade = "B";
} else if (score >= 59 && score <= 69) {
  Grade = "C";
} else if (score >= 50 && score <= 58) {
  Grade = "D";
} else if (score >= 35 && score <= 49) {
  Grade = "E";
}

console.log(Grade);

let age = 19;
let drivingLicense = true;

if (age >= 18) {
  console.log("you are 18 above");
  if (drivingLicense) {
    console.log("You are eligible for Vote");
  }
} else {
  console.log("you are not eligible for Vote");
}
*/

// *********************************** Conrole Flow ***********************************

// let score = 7;
// let arr = [1, 2, 3, 4, 5, 6, 6, 7, 6, 7, 7];

// let result = arr.filter((currElem, idx) => {
//   return currElem !== score;
// });

// console.log(result);

// let score = 43;
// // let Grade;

// if (score >= 89 && score <= 100) {
//   Grade = "A";
// } else if (score >= 71 && score <= 88) {
//   Grade = "B";
// } else if (score >= 61 && score <= 70) {
//   Grade = "C";
// } else if (score >= 50 && score <= 60) {
//   Grade = "D";
// } else if (score >= 39 && score <= 49) {
//   Grade = "E";
// }
// console.log(Grade);

// let num = 4;

// if (num % 2 === 0) {
//   console.log("Number is Even");
// } else {
//   console.log("Number is Odd")
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12  ];

// let result = arr.map((curr) => {
//   if (curr % 2 === 0) {
//     console.log( curr);
//   }
// });

// let Mode = "light";

// if (Mode === "Light") {
//   color = "white";
// } else if (Mode === "Dark") {
//   color = "black";
// } else {
//   color = "no Condition Mach";
// }

// console.log(color);

// for (let i = 0; i <= 20; i++) {
//   if (i == 5) {
//     console.log("5 is Detected");
//     break;
//     // continue
//   }
//   console.log(i);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arr = ["Faheem", "wasid", "shehzad", "sohail", "adil", "saqib", "nizam", "rizwan"];

// arr.forEach((currElem, idx) => {
//   console.log(currElem + 10)
// })

// for (let newArr of arr) {
//   console.log(newArr);
// }

// let obj = {
//   myName: "Faheem",
//   age: 22,
//   marks: 502,
//   Grade: "D",
// };

// for(let i in arr) {
//   console.log(`${arr[i]}`)
// }

// const book = [
//   { title: "Book One", genre: "Fiction", publish: 1980, edition: 2001 },
//   { title: "Book Twp", genre: "Non-Fiction", publish: 1998, edition: 20010 },
//   { title: "Book Three", genre: "History", publish: 1990, edition: 2004 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 2000, edition: 2014 },
//   { title: "Book Five", genre: "Science", publish: 1970, edition: 1998 },
//   { title: "Book Six", genre: "Fiction", publish: 1920, edition: 2008 },
//   { title: "Book Siven", genre: "History", publish: 2004, edition: 2018 },
//   { title: "Book Hight", genre: "Science", publish: 1996, edition: 2007 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1990, edition: 2004 },
// ];

// let result = book.filter((ocum, curr) => {
//   // return ocum.genre === "History";
//   return ocum.genre === "History" && ocum.publish >= 2000;
// });

// console.log(result);

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let result = arr.map((currElem, ocum) => {
//   return currElem + 10;
// });
// console.log(result);

// arr.forEach((currElem) => {
//   console.log(currElem + 10);
// });

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let reuslt = arr
//   .map((num) => num * 10)
//   .map((num) => num + 10)
//   .filter((currElem) => currElem >= 50);

// console.log(reuslt);

// let drivingLicense = false;
// let age = 18;
// const loginFromGoogle = true;
// const loginFromEmail = true;

// if (drivingLicense && age >= 18) {
//   console.log("yess eligble fo driving");
// } else {
//   console.log("not allow for driving");
// }

// if (loginFromEmail || loginFromEmail) {
//   console.log("User Allow for Login");
// } else {
//   console.log("not allow for login");
// }

// for(let i = 0 ; i <= 10 ; i = i + 1) {
//   let elem = i;
//   console.log(elem)
// }

// for (let i = 1; i <= 10; i++) {
//   // console.log(`Outer loop value: ${i}`);
//   for(let j = 1 ; j <= 10 ; j++) {
//     // console.log(`Inner loop Value: ${j}`)
//     // console.log(i + " * " + j + " = " + i * j);
//     console.log`${i} * ${j} = ${i * j}`
//     console.log(``)
//   }
// }

// const map = new Map();
// map.set("PK", "Pakistan");
// map.set("USA", "United State of America");
// map.set("FR", "France");
// map.set("SA", "South Africa");
// map.set("PK", "Pakistan");

// console.log(map)

// const map = new Map();
// map.set("myName", "Faheem");
// map.set("myAge", 22);
// map.set("marks", 502);
// map.set("Grade", "D");
// // console.log(map)

// for(let [key, value] of map) {
//   console.log(`${key} :- ${value}`)
// }

// const map = new Map();
// map.set("Pk", "Pakistan");
// map.set("Us", "United State");
// map.set("Fr", "France");
// map.set("SA", "South Africa");

// for (let [key, value] of map) {
//   console.log(`${key} :=> ${value}`);
// }

// let book = [
//   { languageName: "JavaScript", languageFileName: "Js" },
//   { languageName: "phython", languageFileName: "phy" },
//   { languageName: "java", languageFileName: "java" },
//   { languageName: "Cpp", languageFileName: "c++" },
// ];

// book.forEach((item) => {
//   console.log(`${item.languageFileName} :=> ${item.languageName}`)
// })

// let arr = [1, 2, 3];

// let result = arr.reduce((occum, curr) => {
//   console.log`occum: ${occum} currElem: ${curr}`
//   return occum + curr;
// });

// console.log(result)

// const total = [
//   { item: "javaScript course", price: 2000 },
//   { item: "phython course", price: 200 },
//   { item: "c++ course", price: 1999 },
//   { item: "shopify course", price: 1000 },
// ];

// let result = total.reduce((ocum, currElem) => {
//   return ocum + currElem.price;
// }, 0
// );

// console.log(result);

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let result = arr
//   .map((num) => num * 10)
//   .map((num) => num + 10)
//   .filter((num) => num >= 40);

// console.log(result);

// const key = new Map();
// key.set("pk", "Pakistan");
// key.set("us", "united state");
// key.set("usa", "united state of america");

// // console.log(key)
// for (let [item, value] of key) {
//   console.log(`${item} :=> ${value}`);
// }
