// Immediately Invoked Function Expression (IIFE)

// Simple answer: It helps to execute the function immediately ❌
// Gigachad answer: It helps to execute the function immediately also protects the function from global variable pollution ✅

//  To end the IIFE we've to use semicolon compulsory

// Named IIFE
(function dbConnect(){
    console.log(`DB CONNECTED`)
})();

// Two IIFE in one file (use semicolon)
(function dbConnect2(){
    console.log(`DB AGAIN CONNECTED`)
})();

// Unnamed IIFE
(()=>{
    console.log(`DB CONNECTED ONE MORE TIME`)
})();

// Parameterized IIFE
((name)=>{
    console.log(`DB CONNECTED ONE MORE TIME ${name}`)
})("Vedant")