const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task like DB call, cyrptography, network calls
    setTimeout(function () {
        console.log("Async task is completed!!!")
        resolve()
    }, 1000)
})

// consumption of promise
promiseOne.then(function () {
    console.log("Promise consumed")
})


// Another approach that helps us to do promise stuff in single step

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 is here!!!")
        resolve()
    }, 1000)
}).then(function () {
    console.log("2nd Promise consumed")
})

// yet another promise to make you syntax familiar

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Third Promise")
        resolve({ username: "vedant", email: "vedantpandey434@gmail.com" })
    }, 1000);
})
promiseThree.then(function (user) {
    console.log("Consumed!")
    console.log(user)
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false // true
        if (!error) {
            resolve({ username: "Vedant" })
        }
        else {
            reject("ERROR! Something went wrong...")
        }
    }, 1000)
})

promiseFour.then(function (user) {
    console.log(user)
    return user.username
}).then(function (username) {
    console.log(username)
}).catch(function (error) {
    console.log(error)
}).finally(() => {
    console.log("The promise has either resolved or rejected!")
})


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ language: "javascript", extension: ".js" })
        } else {
            reject("JS error occured!!!")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }

}

consumePromiseFive()


// Gettings hands little dirty with promises and async await

// async function getAllUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data)
//     }
//     catch(error){
//         console.log("E:",error)
//     }
// }

// getAllUsers()

fetch("https://api.github.com/users/VedantPy").then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
}).catch(function(error){
    console.log("E:", error)
})