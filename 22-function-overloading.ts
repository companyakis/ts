function add(x: number, y: number) : number;

function add(x: string, y: string) : string;

function add(x: any, y: any) : any {
    return x + y
}

let result = add(21, 32.4)

console.log(result) //53.4

let result2 = add("Mustafa ", "Buyukdereli")

console.log(result2) //Mustafa Buyukdereli

//let result3 = add("Mustafa", true) //No overload matches this call.
