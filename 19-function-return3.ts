function sayHi(name: string, surname: string = "?") : string { //default value is "?"
    return `Hi ${name} ${surname}`
}

let greeting = sayHi("Mustafa")

console.log(greeting) //Hi Mustafa ?

let greeting2 = sayHi("Mustafa", "Buyukdereli")

console.log(greeting2) //Hi Mustafa Buyukdereli
