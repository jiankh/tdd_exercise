// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

const add = (x,y) => {
    if ( !x || !y) return "Missing number"
    if (typeof x !== "number" || typeof y !== "number" ) return "Cannot add non-numbers"
    return (x+y)
} 

const substract = (x,y) => {
    if ( !x || !y) return "Missing number"
    if (typeof x !== "number" || typeof y !== "number" ) return "Cannot add non-numbers"
    return (x-y)
}


const calculator = {
    add,
    substract
}

export {calculator}