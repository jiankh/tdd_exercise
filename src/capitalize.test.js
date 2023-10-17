import {capitalize} from "./capitalize"

test("Capitalize one word", () => {
    expect(capitalize("test")).toBe("Test")
})

test("Already capitalized sentence", () => {
    expect(capitalize("Hello, how are you?"))
    .toBe("Hello, how are you?")
})

test("Capitalize a sentence", () => {
    expect(capitalize("hello, how are you?"))
    .toBe("Hello, how are you?")
})

test("Ignore if numbers at the beginning", () => {
    expect(capitalize("2 hello there"))
    .toBe("Cannot capitalize numbers.")
})

test("Empty String", () => {
    expect(capitalize(""))
    .toBe("Empty String!")
})

test("Cannot capitalize symbols", () => {
    expect(capitalize("@#$%"))
    .toBe("Invalid character.")
})