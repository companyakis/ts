class Employee {
    firstName: string;
    lastName: string;
    id: number;

    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
}

let employee1 = new Employee("Mustafa", "Buyukdereli", 1)

console.log(employee1) //Employee { firstName: 'Mustafa', lastName: 'Buyukdereli', id: 1 }

console.log(employee1.firstName) //Mustafa
