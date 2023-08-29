const name = "vedant"
const repoCount = 50

// console.log("My name is " + name + " and my repo count is " + repoCount)
console.log(`My name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Black-Leo")

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toLowerCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('c'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-4,8)
console.log(anotherString)

const newStringOne = "       Vedant        "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://vedant.com/vedant%20pandey"
console.log(url.replace("%20", "-"))
console.log(url.includes("sundar"))

console.log(gameName.split("-"))