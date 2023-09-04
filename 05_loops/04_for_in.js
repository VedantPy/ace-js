// for in loop

// for in with objects
const myObject = {
    js: "javascript",
    py: "python",
    cpp: "C++",
    rb: "Ruby",
}
for (const key in myObject) {
    // console.log(key)
}
for (const key in myObject) {
    // console.log(myObject[key])
    // console.log(`${key} is a short form of ${myObject[key]}`)
}

// for in loop with array

const lang = ["javascript", "Ruby", "Pearl",
"java", "C++"]

for (const key in lang) {
    // console.log(key)
}

// for in loop with Map (Not iterable for for in loop)

let map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
// console.log(map)
for (const key in map) {
    console.log(map.key)
}
