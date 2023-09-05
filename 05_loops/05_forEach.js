// for Each loop

let coding = ["javascript", "python", "php", "cpp", "java", "pearl", "ruby"]

// forEach with simple function
coding.forEach( function(val){
    // console.log(val)
})

// forEach with arrow function
coding.forEach((item)=>{
    // console.log(item)
})

// forEach with already defined function
function printMe(item) {
    console.log(item)
}
// coding.forEach(printMe)

// Understanding forEach little more
coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr)
})

// Using forEach with array of objects

const myCoding = [
    {
        languageName: "javascript",
        fileExtension: "js"
    },
    {
        languageName: "java",
        fileExtension: "java"
    },
    {
        languageName: "python",
        fileExtension: "py"
    },
    {
        languageName: "C++",
        fileExtension: "cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName, item.fileExtension)
})