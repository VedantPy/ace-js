// +++++++++++++ Arrays +++++++++++++

// Programming Terminology: () parantheses, [] brackets, {} braces 

const myArr = [0, 1, 2, 3, 4, 5]
// const heroes = ["Veerapan", "Shaktiman", "nagraaj"]

const myArr2 = new Array(1, 2, 4, 5, 3)
// console.log(myArr2[1])

// ++++++++++++++ Array Methods +++++++++++++++

myArr.push(6)
myArr.push(7)

myArr.unshift(9)
myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// let newArr = myArr.join()
// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)


console.log("A", myArr)
const myn1 = myArr.slice(1,3)
console.log("B", myArr)
console.log(myn1)


console.log("B", myArr)
const myn2 = myArr.splice(1,3)
console.log("C", myArr)
console.log(myn2)





