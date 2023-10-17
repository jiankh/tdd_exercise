import { calculator } from "./calculator"

//ADS
test("Add two numbers", () => {
    expect(calculator.add(2,2))
    .toBe(4)
})

test("Add a number with a non-number", () => {
    expect(calculator.add(2,"x"))
    .toBe("Cannot add non-numbers")
})

test("Empty argument", () => {
    expect(calculator.add(2))
    .toBe("Missing number")
})

//SUBSTRACT
test("Substract two numbers", () => {
    expect(calculator.substract(4,2))
    .toBe(2)
})

test("Substract a number with a non-number", () => {
    expect(calculator.substract(2,"x"))
    .toBe("Cannot add non-numbers")
})

test("Empty argument", () => {
    expect(calculator.substract(2))
    .toBe("Missing number")
})

