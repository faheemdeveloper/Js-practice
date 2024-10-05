// // let promise1 = new Promise((resolve =>
// //   setTimeout(() => resolve, 2000, "First")
// // ));

// // // let newProm = new Promise((resolve) => setTimeout(() => resolve ("First")), 2000);
// // let promise2 = new Promise((resolve =>
// //   setTimeout(() => resolve, 1000, "Second")
// // ));
// // // let promise2 = new Promise((resolve, reject) => setTimeout(() => reject, 1000, "some error accurd"));
// // let promise3 = new Promise((resolve =>
// //   setTimeout(() => resolve, 3000, "Third")
// // ));

// // Promise.all([promise1, promise2, promise3])
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// // let promise1 = new Promise((resolve) => setTimeout(() => resolve, 1000, "first"));
// // let promise2 = new Promise((resolve) => setTimeout(() => resolve, 1000, "first"));
// // let promise3 = new Promise((resolve) => setTimeout(() => resolve, 1000, "first"));

// // Promise.all([promise1, promise2, promise3])
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// // let promise1 = new Promise((resolve) => {
// //   setTimeout(() => {
// //     resolve("First");
// //   }, 2000);
// // });

// // let promise2 = new Promise((resolve) => {
// //   setTimeout(() => {
// //     resolve("Second");
// //   }, 2000);
// // });

// // let promise3 = new Promise((resolve) => {
// //   setTimeout(() => {
// //     resolve("Third");
// //   }, 2000);
// // });

// // Promise.all([promise1, promise2, promise3])
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// // let promise1 = new Promise((resolve) => setTimeout(resolve, 2000, "First"));
// // let promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "Second"));
// // let promise3 = new Promise((resolve) => setTimeout(resolve, 2000, "Third"));

// // let promise1 = new Promise((resolve) => setTimeout(resolve("First")), 2000);
// // let promise2 = new Promise((resolve) => setTimeout(resolve ("Second")), 2000);
// // let promise3 = new Promise((resolve) => setTimeout(resolve ("Third")), 2000);

// // Promise.all([promise1, promise2, promise3])
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// // //   });

// // let promise1 = new Promise((resolve) => setTimeout(resolve, 3000, "First"));
// // let promise2 = new Promise((resolve) => setTimeout(resolve, 1000, "Second"));
// // let promise3 = new Promise((resolve) => setTimeout(resolve, 5000, "Third"));

// // Promise.race([promise1, promise2, promise3])
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// // let firstPromise = new Promise((resolve, rejected) => {
// //   let success = false;
// //   if (success) {
// //     setTimeout(() => {
// //       resolve("Promise is fulfilled successfully");
// //     }, 3000);
// //   } else {
// //     setTimeout(() => {
// //       rejected("Promise faild while some error accurd");
// //     }, 5000);
// //   }
// // });

// // firstPromise
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// let callOuter = (event) => {
//   console.table([
//     {
//       Description: "I am the outer one",
//       Target: event.target,
//     },
//   ]);
// };

// let callMiddle = (event) => {
//   console.table([
//     {
//       Description: "I am the Middle one",
//       Target: event.target,
//     },
//   ]);
//   // event.stopPropagation()
// };

// let callInner = (event) => {
//   console.table([
//     {
//       Description: "I am the inner one",
//       Target: event.target,
//     },
//   ]);
//   // event.stopPropagation()
// };

// document.getElementById("outer").addEventListener("click", callOuter, true);
// document.getElementById("middle").addEventListener("click", callMiddle, true);
// document.getElementById("inner").addEventListener("click", callInner, true);

// function myFunction() {
//   return "hello";
// }

// let newFunction = myFunction;

// console.log(newFunction());

// let promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("First");
//   });
// });

// let promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Second");
//   }, 3000);
// });

// let promise3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Second");
//   }, 3000);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   }, 3000)
//   .catch((erorr) => {
//     console.log(erorr);
//   });

// CallBack function
// function greet(name, callback) {
//   console.log("Hello ", name);
//   callback();
// }

// function saygood() {
//   console.log("Goood bye");
// }

// greet("faheem", saygood());

// Higher Order Function

// function input(name, greetuser) {
//   console.log(`Reservid Input: ${name}`);
// }

// function greetuser(name) {
//   console.log(`Hello ${name}`);
// }
// input(`Faheem ${greetuser()}`);

// function mathOperation(a, b, operation) {
//   return operation(a, b);
// }

// function add(a, b) {
//   return a + b;
// }

// console.log(mathOperation(4, 5, add))

// function greet(name, callback) {
//   console.log("hello ", name);
//   callback();
// }

// function add() {
//   console.log("goodbye");
// }

// greet("faheem", add);

// function greet(name, hello) {
//   console.log("hello ", name)
//   hello()
// }

// function add() {
//   console.log("hello gays")
// }

// greet("faheem", add)

// async function myFunction() {
//   console.log("hello Faheem");
// }

// myFunction().then((res) => {
//   return res
// })

// function resolveAllAfter2Second() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolve success");
//     }, 3000);
//   });
// }

// async function asyncCall() {
//   console.log("caling...");
//   let result = await resolveAllAfter2Second();
//   console.log(result)
// }

// asyncCall();

// Using Promises
// function fechData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data Fetched");
//     }, 3000);
//   });
// }

// fechData().then((res) => {
//   console.log(res)
// }).catch((error) => {
//   console.log(error)
// })

// Using Async await

async function getData() {
  
try{
  let result = await fetchData();
}catch(error) {
  console.log(error)
}
}