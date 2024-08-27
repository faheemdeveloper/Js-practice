// Mode Changing

let box = document.querySelector("div");

let newbtn = document.createElement("button");
let color = "green"

newbtn.innerText = "Shop Now";
box.append(newbtn);
newbtn.style.padding = "0.8rem 2rem";
newbtn.style.fontSize = "0.8rem";
newbtn.style.borderRadius = "1rem";

box.addEventListener("click", () => {
    if(color === "green") {
        color = "blue";
        document.querySelector("div").style.backgroundColor = "skyblue";
        document.querySelector("div").style.Color = "white";
    } else {
        color = "green";
        document.querySelector("div").style.backgroundColor = "green";
    }
});