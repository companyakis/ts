//number d is optional
function multiplication(a: number, b: number, c: number, d?: number) {

    if (typeof d !== "undefined") {
        return a * b * c *d
    }

    return a * b * c

}

let result1 = multiplication(3, 3.5, 7, 6)
console.log(result1) //441

let result2 = multiplication(6, 7, 8)
console.log(result2) //336
