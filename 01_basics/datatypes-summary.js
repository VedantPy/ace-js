// Primitive Datatypes
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt 

let name = "Vedant"

let score = 100
let scoreValue = 100.3

let isLoggedIn = false
let outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId)

const bigNumber = 2343543423n;
console.log(bigNumber)

console.log(typeof name)

// Non Primitive(Reference)
// Arrays, Objects, Functions

let heroes = ["shaktiman", "ironman", "spiderman"]

let user = {
    name:"Vedant",
    age: 22
}

const myFunc = function(){
    console.log("Hello World")
}

console.log(typeof heroes)


// ++++++++++++++++++++++ Stack and Heap Management +++++++++++++++++++++++

// Stack(Primitive Datatypes) and Heap(Non-Primitive Datatypes)

let universityName = "Gujarat Technological University"
let newUniversityName = universityName
newUniversityName = "Sankalchand Patel University"

console.log(universityName)
console.log(newUniversityName)

let userOne = {
    email: "vedant@gtu.com",
    prn: 12345678
}

let userTwo = userOne

userTwo.email = "vedant@spu.com"

console.log(userOne.email)
console.log(userTwo.email)