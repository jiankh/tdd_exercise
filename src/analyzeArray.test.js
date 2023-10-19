import { analyzeArray } from "./analyzeArray"

test("Normal Array", () => {
    expect(analyzeArray([1,2,3,4,5]))
    .toStrictEqual({
        average: 3,
        min:1,
        max:5,
        length:5
    })
})

test("Array contains strings", () => {
    expect(analyzeArray([1,2,3,"4",5]))
    .toStrictEqual({
        average: 3,
        min:1,
        max:5,
        length:5
    })
})