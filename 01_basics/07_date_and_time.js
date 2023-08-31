// ++++++++++++++Dates+++++++++++++

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")

console.log(myCreatedDate.toLocaleString())

// +++++++++++++ TimeStamp +++++++++++

let timeStamp = Date.now()

console.log(timeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

// Customize the LocaleString in dedicated format
newDate.toLocaleDateString('default', {
    weekday: "long"
})

console.log(newDate.toLocaleDateString())