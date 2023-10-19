//An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.


const analyzeArray = (arr) => {

    //average
    const sum = arr.reduce((curr, num) => {
        return curr+num
    }, 0 )
    const average = sum / arr.length
    
    //min & max
    let min = Infinity
    let max = -Infinity
    arr.forEach((number) => {
        min = Math.min(number, min)
        max = Math.max(number, max)
    })

    //length
    const length = arr.length

    return {
        average: average,
        min:min,
        max:max,
        length: length
    }
}

export {analyzeArray}