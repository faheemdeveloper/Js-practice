// The Square of Even numbers in map mathod

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


let result = numbers.map((currElem) => {
    if(currElem % 2 === 0) {
        return currElem * currElem;
    }
}).filter((currElem) => currElem !== undefined);

