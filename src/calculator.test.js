import { calculator } from "./calculator"

//ADS
test("Add two numbers", () => {
    expect(calculator.add(2,2))
    .toBe(4)
})

test("Add a number with a non-number", () => {
    expect(calculator.add(2,"x"))
    .toBe("Cannot computate non-numbers")
})


//SUBSTRACT
test("Substract two numbers", () => {
    expect(calculator.substract(4,2))
    .toBe(2)
})

test("Substract a number with a non-number", () => {
    expect(calculator.substract(2,"x"))
    .toBe("Cannot computate non-numbers")
})


//Divide
test("Divide two numbers", () => {
    expect(calculator.divide(4,2))
    .toBe(2)
})

test("Divide a number with a non-number", () => {
    expect(calculator.divide(2,"x"))
    .toBe("Cannot computate non-numbers")
})


test("Division by zero", () => {
    expect(calculator.divide(2,0))
    .toBe("Cannot divide by zero!")
})

//Multiply
test("Multiply two numbers", () => {
    expect(calculator.multiply(4,2))
    .toBe(8)
})

test("Divide a number with a non-number", () => {
    expect(calculator.multiply(2,"x"))
    .toBe("Cannot computate non-numbers")
})
