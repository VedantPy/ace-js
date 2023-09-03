// +++++++++++++ this keyword ++++++++++++++
const user = {
    username: "Vedant",
    price : 999,
    welcomeMessage : function(){
        console.log(`Hey, ${this.username} welcome to the dashboard`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()

console.log(this) // In node environment this keyword refers to the empty object {}
// In browser environment this keyword refers to the window object

function chai(){
    let username = "Vedant"
    console.log(this) // this will give lots of information
    console.log(this.username) // we get undefined that means we can only use this keyword with objects.
}

// this keyword also 
const chai1 = function(){
    let username = "Vedant"
    console.log(this.username)
}

// this keyword cannot use in arrow function
const chai2 = () => {
    let username = "Vedant"
    console.log(this.username)
}

chai()

// +++++++++++++ Use of Arrow Function +++++++++++++

// Arrow function
const addTwo = (num1, num2) => {
    return num1 + num2
}

// Implicit arrow function
const addTwo1 = (num1, num2) => (num1 + num2)

// Passing object to the the implicit arrow function
const addTwo2 = (num1, num2) => ({username: "Vedant"})

console.log(addTwo(3,6))