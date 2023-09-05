const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.map((num)=>{
    return num + 10
})

// console.log(newNums)

// Same thing using forEach loop

const newNums1 = []
myNums.forEach((num)=>{
    newNums1.push(num  + 10)
})
// console.log(newNums1)

// Here we can also use chaining of these methods 
const newNums2 = myNums.map((num)=>{
    return num * 10
}).map((num)=>{
    return num + 1
}).filter((num)=>{
    return num >= 40
})
console.log(newNums2)