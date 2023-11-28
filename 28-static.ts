class Circle {
    static piNumber: number = 3.14

    static calculatePerimeter(radius: number) {
        return this.piNumber * 2 * radius
    }

    static calculateArea(radius: number) {
        return this.piNumber * radius * radius
    } 
}

console.log(Circle.piNumber) //3.14

console.log(Circle.calculatePerimeter(5).toFixed(2)) //31.40

console.log(Circle.calculateArea(7).toFixed(2)) //153.86
