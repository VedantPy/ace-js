// for 

// Printing numbers from 0 to 10
for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element)
}

// Control statements nested in loop

for(let i = 1; i <= 10; i++){
    const element = i;
    if(element == 5){
        // console.log(`${element} is a best number`)
    }
    // console.log(element)
}

// Nested Loops visualization

for(let i = 1; i <= 10; i++){
    // console.log(`Outer loop i: ${i}`)
    for(let j = 1; j <= 10; j++){
        // console.log(`Inner loop i ${i} and inner loop j: ${j}`)
    }
}

// Application of nested loop

for(let i = 1; i <= 10; i++){
    // console.log(`Multiplication table of ${i}:`)
    for(let j = 1; j <= 10; j++){
        // console.log(`${i} * ${j} = ${i*j}`)
    }
}

// Loops with array (though we'll see easy approach later)

let myArr = ["batman", "superman", "shaktiman"]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element)
}

// break and continue

// Demonstration of break

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`)
        break
    }
    // console.log(`Value of i is: ${index}`)
}

// Demonstration of continue

for (let index = 1; index < 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`)
        continue
    }
    console.log(`Value of i is: ${index}`)
}