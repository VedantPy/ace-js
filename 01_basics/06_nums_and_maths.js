// ++++++++++++++++++++++Numbers+++++++++++++++++++++

const score = 100
console.log(score)

const balance = new Number(300)
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)

console.log(balance.toFixed(2))

const anotherNumber = 123.8989
console.log(anotherNumber.toPrecision(5))

const hundreds = 1000000
console.log(hundreds.toLocaleString())

// ++++++++++++++++++++++Maths+++++++++++++++++

console.log(Math)

console.log(Math.abs(-4))
console.log(Math.abs(4))

console.log(Math.round(4.2))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.6))
console.log(Math.min(4,3,6,8))
console.log(Math.max(4,3,6,8))

console.log(Math.random()) 
// It will give me the random number between 0 and 1.

// But what if we want from 1 to 10 we will multipy it with 10 so the result will shift one decimal digit. In order to avoid the 0.0304 case we'll also add 1 to it. It will give the result in decimal to remove the decimals we'll wrap it up in Math.floor().
console.log(Math.floor((Math.random()*10)+ 1))

// Between the range of min and max
const min = 20
const max = 40
console.log(Math.floor((Math.random()*(max-min + 1)) + min))