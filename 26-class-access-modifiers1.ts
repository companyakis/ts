//public vs private

class Employee {
    firstName: string; //default public
    public lastName: string;
    private id: number;

    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }

    greeting() {
        return `Hi ${this.firstName} ${this.lastName}!`
    }
}

let employee1 = new Employee("Mustafa", "Buyukdereli", 1)

//console.log(employee1.id) //Property 'id' is private and only accessible within class 'Employee'
