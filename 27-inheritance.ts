class Person {
    firstName: string;
    lastName: string

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() : string {
        return `Name and surname: ${this.firstName} ${this.lastName}...`;
    }
}

let person1 = new Person("Mustafa", "Buyukdereli")

console.log(person1.getFullName()) //Name and surname: Mustafa Buyukdereli...

class Employee extends Person {
    id: number;

    constructor(firstName: string, lastName: string, id: number) {
        super(firstName, lastName);
        this.id = id; 
    }
}

let employee1 = new Employee("Aygun", "Buyukdereli", 11)

console.log(employee1) //Employee { firstName: 'Aygun', lastName: 'Buyukdereli', id: 11 }

console.log(employee1.getFullName()) //Aygun Buyukdereli...
