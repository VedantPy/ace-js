// for of

// ["", "", ""]
// [{}, {}, {}]

// for of loop with array
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
}

// for of loop with string
const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`Each character of loop is ${greet}`)
}

// for of loop with map
let map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
// console.log(map)
for (const key of map) {
    // console.log(key)
}
for (const [key, value] of map) {
    // console.log(`${key} => ${value}`)
}

// for of loop with objects (Not iterable)

let myObj = {
    "game1" : "NFS",
    "game2" : "GTA VC",
    "game3" : "GTA SA"
}
for (const key of myObj) {
    // console.log(key)
}