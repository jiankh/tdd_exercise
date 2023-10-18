import { caesarCipher } from "./caesarCipher"

test("Factor of 1 on one word", () => {
    expect(caesarCipher("abc", 1))
    .toBe("bcd")
})

test("Z wraps to A", () => {
    expect(caesarCipher("xyz", 2))
    .toBe("zab")
})

test("Test for punctuations", () => {
    expect(caesarCipher("hello, how are you?", 1))
    .toBe("ifmmp, ipx bsf zpv?")
})

test("Test for punctuations", () => {
    expect(caesarCipher("We must attack! at Dawn!", 4))
    .toBe("ai qywx exxego! ex hear!")
})