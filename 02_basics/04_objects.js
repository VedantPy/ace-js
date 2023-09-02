const tinder = new Object()

tinder.id = "123abc"
tinder.name = "Vedant"
tinder.isLoggedIn = false
// console.log(tinder)

const regularUser = {
    email: "vedant@spu.ac.in",
    fullname: {
        userFullName: {
            firstname: "Vedant",
            lastname: "Pandey"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstname)

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// const obj4 = {obj1, obj2, obj3} // It will create the nested objects.
// const obj4 = Object.assign({}, obj1, obj2, obj3) // It will do the expected result
const obj4 = { ...obj1, ...obj2, ...obj3 } //Spread operator gigachad
// console.log(obj4)

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
    {
        id:4,
        email: "d@gmail.com"
    }
]
// console.log(users[1].email)

console.log(tinder)
console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))

console.log(tinder.hasOwnProperty("isLogged"))

