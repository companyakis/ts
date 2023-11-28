//protected

class Employee {
    firstName: string; //default public
    lastName: string;
    protected id: number;

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

//console.log(employee1.id) //Property 'id' is protected and only accessible within class 'Employee' and its subclasses
