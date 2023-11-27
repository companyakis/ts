let year: any

year = 2023

let thisYear = <number>year

//thisYear = "2023" //Type 'string' is not assignable to type 'number'

console.log(thisYear + 25) //2048

console.log(typeof(thisYear)) //number
