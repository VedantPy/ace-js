function sayMyName() {
    console.log("V")
    console.log("e")
    console.log("d")
    console.log("a")
    console.log("n")
    console.log("t")
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return (number1 + number2)
}

// Functions' Parameters v/s Arguments
// Parameters are passed to the function while defining it 
// Arguments are passed to function while calling it

let result = addTwoNumbers(12, 5)
// console.log(`Result: ${result}`)

function loginUserMessage(username = "Sam") {
    if (username === undefined) {
        return "Please enter your name"
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

// ++++++++++++++ Function with Objects +++++++++++++++

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 600, 2000))

const user = {
    username: "vedant",
    course: "ace-js"
}

function handleObject(anyObject) {
    console.log(`The name of the person is ${anyObject.username} and he is the tutor of the course ${anyObject.course}`)
}
handleObject(user)

handleObject({
    username: "Sam",
    course: "AI-ML"
})

const myArray = [100, 200, 300, 400]

function getSecondElement(getArray){
    return getArray[1]
}

console.log(getSecondElement(myArray))
console.log(getSecondElement([20,10,35,70]))