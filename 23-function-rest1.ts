function add(...numbers: number[]) : number {
    let totalValue = 0
    numbers.forEach((num) => totalValue += num)
    return totalValue
}

let value1 = add(12)
console.log(value1) //12

let value2 = add(23, 34, 41, 87)
console.log(value2) //185
