
const age = 12
age >= 18 ? console.log('vote dio') : console.log('Gumai thako')

let price = 1000;
const isLeader = false;
if (isLeader === true){
    price = 0;
}
else {
    price = price - 200;
}
console.log(price);

const price = 1000;
price = isLeader === true ? 0 : price + 100;
let price = 1000
if(isLeader === true){
    if (price > 1000){
        price = price / 2;
    }
}
else{price = price + 1000;}
console.log(price);

price = isLander === true ? price / 2 : 0 : price + 1000;