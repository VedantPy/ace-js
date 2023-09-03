const email = "vedant@spu.ac.in"

if(email){
    console.log("Got user email.")
}
else{
    console.log("Don't have user email")
}

// falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values: "0", "false", " ", [], {}, function(){}

// Detect objects and array whether they are empty or not.

const myArr = []

if(myArr.length === 0){
        console.log("Array is empty")
}

const myObj = {}

if(Object.keys(myObj).length === 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??)
// Focused only on null and undefined, it will basically safety check the code from null or undefined

let val1;
val1 = 5 ?? 10
console.log(val1)

val1 = null ?? 10
console.log(val1)

val1 = undefined ?? null
console.log(val1)

// Ternary Operator 

// condition ? true : false 

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("Price less than 80") : console.log("Price greater than 80")