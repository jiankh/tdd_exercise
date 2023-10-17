// A reverseString function that takes a string and returns it reversed.

function reverseString(string) {

    if (typeof string !== "string") return "Not a string!"

    let newString = ""
    for (let i = string.length - 1; i >= 0 ; i--) {
        newString = newString + string[i]
    }
    return newString
}

export {reverseString}