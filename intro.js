// The sum of Total Price in Reduce Method

let produtPrice = [100, 200, 300, 400, 500, 600];

let totalPrice = produtPrice.reduce((occun, currElem) => {
    return occun + currElem;
}, 0);

console.log(totalPrice)