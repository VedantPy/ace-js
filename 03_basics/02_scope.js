// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log(`INNER a: ${a}`)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Vedant"
    function two(){
        const website = "GitHub"
        // console.log(username)
    }
    // console.log(website)
    // console.log("Hello")
    two()
}
one()

if(true){
    const username = "vedant"
    if(username === "vedant"){
        const website = "GitHub"
        // console.log(`${username} ${website}`)
    }
    // console.log(website)
}
// console.log(username)

// ++++++++++++++++ interesting +++++++++++++

// This is know as simple function
console.log(addOne(5))
function addOne(num){
    return num + 1;
}


// This is known as Expression Function
const addTwo = function(num){
    return num + 2;
}

addTwo(5)