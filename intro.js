
let score = prompt("Enter you Numbers:");

if (score >= 90 && score <= 100) {
    Grade = "A"
} else if (score >= 79 && score <= 89) {
    Grade = "B"
} else if (score >= 69 && score <= 70) {
    Grade = "C"
} else if (score >= 50 && score <= 59) {
    Grade = "D"
} else if (score >= 0 && score <= 49) {
    Grade = "E"
}

console.log(Grade);