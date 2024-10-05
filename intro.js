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

let promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("First");
  });
});

let promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Second");
  }, 3000);
});

let promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Second");
  }, 3000);
});

Promise.all([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  }, 3000)
  .catch((erorr) => {
    console.log(erorr);
  });
