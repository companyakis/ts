//never means never

let condition: never

//condition = null //Type 'null' is not assignable to type 'never

//condition = undefined //Type 'undefined' is not assignable to type 'never'

function throwError(errorInfo: string): never {
    throw new Error(errorInfo)
}

//throwError("Plase, correct information!")

throwError("I'm here!")
