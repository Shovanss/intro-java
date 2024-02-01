

// const price = 500;
// if(price >= 500){
//     const discount = price * 20 / 100
//     console.log(discount)
// }

const age = 12;
const price = 950

if(age <= 12){
    console.log('you can eat free');
}
else if(age >= 60){
    // 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if(age >= 50){
    // 30% discount
    const discount = price * 30 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else{
    console.log(price)
}