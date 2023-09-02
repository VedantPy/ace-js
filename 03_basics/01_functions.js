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

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return (number1 + number2)
}

// Functions' Parameters v/s Arguments
// Parameters are passed to the function while defining it 
// Arguments are passed to function while calling it

let result = addTwoNumbers(12, 5)
// console.log(`Result: ${result}`)

function loginUserMessage(username = "Sam"){
    if(username === undefined){
        return "Please enter your name"
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())