// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

const add = (x,y) => {
    if (typeof x !== "number" || typeof y !== "number" ) return "Cannot computate non-numbers"
    return (x+y)
} 

const substract = (x,y) => {
    if (typeof x !== "number" || typeof y !== "number" ) return "Cannot computate non-numbers"
    return (x-y)
}

const divide = (x,y) => {
    if (typeof x !== "number" || typeof y !== "number" ) return "Cannot computate non-numbers"
    if (y === 0) return "Cannot divide by zero!"
    return (x/y)
}

const multiply = (x,y) => {
    if (typeof x !== "number" || typeof y !== "number" ) return "Cannot computate non-numbers"
    return (x*y)
}


const calculator = {
    add,
    substract,
    divide,
    multiply
}

export {calculator}