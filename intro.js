// Local Storage

let studentProfile = {
  fullName: "Faheem",
  age: 22,
  marks: 502,
  Grade: "D",
  learning: "JavaScript",
};


// let addList = () => {
//     localStorage.setItem("StudentProfile", JSON.stringify(studentProfile));
// }


// document.querySelector(".btn").addEventListener("click", () => {
//     addList()
// });

let getlist = () => {
    let getObj = JSON.parse(localStorage.getItem("StudentProfile"));
    console.log(getObj)
};

document.querySelector(".btn").addEventListener("click", () => {
    getlist()
})