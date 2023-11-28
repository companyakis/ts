class Employee {
    firstName: string;
    lastName: string;
    id: number;

    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }

  //class method 
  greeting() {
        return `Hi ${this.firstName} ${this.lastName}!`
    }
}

let employee1 = new Employee("Mustafa", "Buyukdereli", 1)

console.log(employee1.greeting()) //Hi Mustafa Buyukdereli!
