// There are many ways to create  object 

// Singleton object: This type of object is made while we are using constructors
// Object.create

// Object Literals(Our concern for now):
let mySym = Symbol()
let JsUser = {
    name:"Vedant",
    "full name" : "Vedant Pandey",
    [mySym]: Symbol("mykey1"),
    age : 18,
    location : "Himatnagar",
    email: "vedant@spu.ac.in",
    isLoggedIn: false,
    lastLoginDays : ["Monday", "Friday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
console.log(typeof mySym)

JsUser.email = "vedant@openai.com"
// Object.freeze(JsUser)
JsUser.email = "vedant@guni.ac.in"
console.log(JsUser.email)

JsUser.greeting = function(){
    console.log("Hello JsUser")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`)
}

console.log(JsUser.greeting)
console.log(JsUser.greetingTwo)
JsUser.greeting()
JsUser.greetingTwo()