//  Capitalize function that takes a string and returns it with the first character capitalized.

function capitalize(string) {
    if (string === "") return "Empty String!"
    const firstLetter = string.charAt(0)

    if (isNumber(firstLetter)) return "Cannot capitalize numbers."
    if (!isLetter(firstLetter)) return "Invalid character."

    const newString = firstLetter.toUpperCase() + string.slice(1)
    return newString
}


function isNumber(string) {
    const regex = /^[0-9]$/
    return regex.test(string)
}

function isLetter(string) {
    const regex =/[A-Za-z]/
    return regex.test(string)
}

export {capitalize}