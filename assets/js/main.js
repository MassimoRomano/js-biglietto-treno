console.log("funziona")


const forKm = 0.21
// add price for km 

const travelerAge = Number(prompt("How old are you?"))
//Site request to the customer for the age

const travelerKm = Number(prompt("How many km do you want to travel for?"))
// Site request to the customer for the kilometers to travel

const fullPrice = forKm * travelerKm
//ful price

const discountMin = fullPrice * 0.2
//discount del 20%
const discountMax = fullPrice * 0.4
//discount del 40%


if(travelerAge < 18){
    price = (fullPrice - (discountMin)).toFixed(2)
}
//price for <18

else if (travelerAge => 65){
    price = (fullPrice - (discountMax)).toFixed(2)
}
//price for =>65

else{
    price = fullPrice.toFixed(2)
}
// full price

alert(`price: ${price} €`);
console.log(`price: ${price} €`);
