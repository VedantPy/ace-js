/*
Javascript Execution Context:
    Global Context is always there ✅
        If node env {}, If browser env Window Object

There are 2 types of Javascript Execution Context:
    1. Global Context
    2. Functional Context
    3. Eval Execution Context (Just aware of this type)


Javascript code usually run in 2 phases:
    1. Memory Creation Phase
    2. Execution Phase

Understand this concept using code example:

    let val1 = 10
    let val2 = 5
    function addNum(num1, num2){
        let total = num1 + num2
        return total1
    }
    
    let result1 = addNum(val1, val2)
    let result2 = addNum(10, 2)

    Execution of above code:

    Global Execution:
        this

    Memory Phase:
        val1 -> undefined
        val2 -> undefined
        addNum -> definition
        result1 -> undefined
        result2 -> undefined
    
    Execution phase:
        val1 -> 10
        val2 -> 5
        addNum -> new variable environment + Execution thread
                    Memory phase:
                        num1 -> undefined
                        num2 -> undefined
                        total -> undefined
                    Execution phase:
                        num1 -> 10
                        num1 -> 5
                        total -> 15 (returns to global context, after returning it will delete this environment variable)
        result -> 15
        
        addNum -> new variable environment + Execution thread
                    Memory phase:
                        num1 -> undefined
                        num2 -> undefined
                        total -> undefined
                    Execution phase:
                        num1 -> 10
                        num1 -> 2
                        total -> 12 (returns to global context, after returning it will delete this environment variable) 
        result -> 12
                
*/

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// ++++++++++++++ Call Stack +++++++++++++

function one(){
    console.log("one")
    two()
    console.log("Function one end")
}
function two(){
    console.log("two")
    three()
    console.log("Function two end")
}
function three(){
    console.log("three")
    console.log("Function three end")
}
one()
two()
three()