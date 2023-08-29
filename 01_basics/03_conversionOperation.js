let numericString = "33"
console.log(typeof(numericString))
let valueInNumber = Number(numericString)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let nullVariable = null
console.log(typeof nullVariable)
valueInNumber = Number(nullVariable)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let undefinedVaribale = undefined
console.log(typeof undefinedVaribale)
valueInNumber = Number(undefinedVaribale)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let stringVaribale = "vedant"
console.log(typeof stringVaribale)
valueInNumber = Number(stringVaribale)
console.log(typeof valueInNumber)
console.log(valueInNumber)

let boolVariable = true
console.log(typeof boolVariable)
valueInNumber = Number(boolVariable)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// ******************* Operations ********************

let value = 3
let negValue = -value
console.log(negValue)

console.log(6+2)
console.log(6-2)
console.log(6*2)
console.log(6**2)
console.log(6%2)

let str1 = "Vedant"
let str2 = " Pandey"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1+ "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(5 + 3 * 5 % 3) // Bad practice use extra parantheses 

// Tricky questions may asked in interviews

console.log(+true)
console.log(+"")

let num1, num2, num3
num1 = num2 = num3 = 2+2
console.log(num1)
console.log(num2)
console.log(num3)

let w = 100
let x = w++
console.log(w)
console.log(x)

let y = 200
let z = ++y
console.log(y)
console.log(z)