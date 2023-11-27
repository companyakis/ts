//number Enum

enum Direction {
    Up = 1, //default value 0!
    Down,
    Right,
    Left,
}

console.log(Direction.Right) //3
console.log(Direction[3]) //Right
//string Enum

enum Langs {
    AI_1 = "Python",
    AI_2 = "Mojo",
    Blockchain1 = "Rust",
    Blockchain2 = "Solidity",
    Blockchain3 = "TypeScript",
    AR = "JavaScript"
}

console.log(Langs.Blockchain2)
console.log(Langs["AI_2"])
