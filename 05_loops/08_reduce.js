const myNums = [1,2,3]

// reduce using simple function
const myTotal = myNums.reduce(function (acc,cur_val){
    return acc + cur_val;
}, 0)
// console.log(myTotal)

// reduce using arrow function 
const myTotal1 = myNums.reduce((acc, curr)=>{
    return acc + curr
}, 0)
// console.log(myTotal1)

const shoppingCart = [
    {
        itemName: "JavaScript course",
        price: 499
    },
    {
        itemName: "CyberSecurity",
        price: 899
    },
    {
        itemName: "Python for AI-ML",
        price: 14999
    },
    {
        itemName: "Python for Data Science",
        price: 9999
    },
    {
        itemName: "Data Structure and Algorithms",
        price: 4999
    }
]

const priceToPay = shoppingCart.reduce((acc, item)=>{
    return acc + item.price
}, 0)

console.log(`Price to Pay: ${priceToPay}`)