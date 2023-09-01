const marvel_heroes = ["ironman", "spiderman", "thor"]
const dc_heroes = ["superman", "batman", "flash"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])


// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)

// const all = [...marvel_heroes, ...dc_heroes]
// console.log(all)

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const new_another_array = another_array.flat(Infinity)
// console.log(new_another_array)

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name:"Vedant"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = null

console.log(Array.of(score1, score2, score3, score4, undefined))