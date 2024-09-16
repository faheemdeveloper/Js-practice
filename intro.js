let product = [
  {name: "laptop", price: 1200},
  {name: "phone", price: 150},
  {name: "tablate", price: 500},
  {name: "SmartWatch", price: 300},
]

let updateProduct = product.filter((currElem) => {
  return currElem.price <= 500;
});

console.log(updateProduct);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = numbers.map((currElem) => {
  if(currElem % 2 === 0) {
    return currElem * currElem
  }
}).filter((currElem) => currElem !== undefined);

console.log(result)

let numbers = [100, 200, 300, 400, 500, 600];

let totalProduct = numbers.reduce((accum, currElem) => {
  return accum + currElem;
}, 0);

console.log(totalProduct);

let students = ["Faheem", "Wasid","shehzad", "shahzaib", "adil", "basit",];

let result = students.map((currEleem) => {
  return currEleem.toUpperCase()
});

console.log(result);