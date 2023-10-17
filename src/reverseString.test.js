import { reverseString } from "./reverseString";

test("Reverse one word", () => {
    expect(reverseString("test")).toBe("tset")
})

test("Empty String", () => {
    expect(reverseString("")).toBe("")
})

test("Reverse a sentence", () => {
    expect(reverseString("Hello, how are you?"))
    .toBe("?uoy era woh ,olleH")
})

test("Numbers instead of string", () => {
    expect(reverseString(12345))
    .toBe("Not a string!")
})

test("Symbols instead of string", () => {
    expect(reverseString())
    .toBe("Not a string!")
})