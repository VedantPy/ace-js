// if

// if(condition){ 
// if the condition evaluates true then and only then the if scoped block can execute
// }

// conditional operators : <, >, <=, >=, ==, !=, ===, !==


// const tempreature = 45 
// const tempreature = 55

// if(tempreature < 50){
//     console.log("Tempreature less than 50")
// }
// else{
//     console.log("Tempreature greater than 50")
// }
// console.log("This is going to execute any way")

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)

// Implicit if block (Not a good practice)

// balance = 1000
// if (balance > 500) console.log("test"), console.log("test2")


// else if ladder

// const balance = 1000

// if(balance < 500){
//     console.log("Balance less than 500")
// }
// else if(balance < 750){
//     console.log("Balance less than 750")
// }
// else if(balance < 950){
//     console.log("Balance less than 950")
// }
// else if(balance < 1200){
//     console.log("Balance less than 1200")
// }

// Real life use cases

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInUsingEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allowed to buy courses")
}

if(loggedInFromGoogle || loggedInFromGoogle){
    console.log("Allow him to LogIn")
}