let coding = ["javascript", "python", "php", "cpp", "java", "pearl", "ruby"]

const values = coding.forEach((num) => {
    return num
})
// console.log(values)

// forEach loop not gonna return anything but what if we've to particular thing to any particular value we can use filter

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = nums.filter((num) => {
    return num > 4
})
// console.log(newNums)

// but what if we've to use forEach only

const newNums1 = []
nums.forEach((num) => {
    if (num > 4) {
        newNums1.push(num)
    }
})
// console.log(newNums1)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userbooks = books.filter((bk)=>{
    return bk.genre === "History"
})

userbooks = books.filter((bk)=>{
    return bk.genre === "History" && bk.publish >= 1995
})
console.log(userbooks)
