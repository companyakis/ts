function concatStrings(msg: string, ...names: string[]) : string {
    return msg + " " + names.join(", ")
}

let hi1 = concatStrings("Hi", "Mustafa")
console.log(hi1) //Hi Mustafa

let hi2 = concatStrings("Hi", "Aygun", "Musab", "Alperen")
console.log(hi2) //Hi Aygun, Musab, Alperen
