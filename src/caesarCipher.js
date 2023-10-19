
const caesarCipher = (string, factor) => {
    const key = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    
    let newString = ""
    let letterToNumberArr = []

    //change the string into an array of numbers
    for (let i = 0; i < string.length; i++) {
        const letter = string[i].toLowerCase()
        if (key.includes(letter)) {
            const letterValue = key.indexOf(letter)
            letterToNumberArr.push(letterValue)
        } else {
            letterToNumberArr.push(letter)
        }
        
    }

    letterToNumberArr.forEach((number) => {
        if (isNaN(number) || number === " ") {
            newString = newString + number
        } else if (number+factor > 25) {
            newString = newString + key[ number+factor - 26]
        } else {
            newString = newString + key[number+factor]
        }
    })

    return newString
}


export {caesarCipher}