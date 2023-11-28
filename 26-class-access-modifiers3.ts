//readonly

class Employee {
    firstName: string; //default public
    lastName: string;
    readonly id: number;

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

employee1.firstName = "Bilge Kültigin"

//employee1.id = 101 //Cannot assign to 'id' because it is a read-only property
