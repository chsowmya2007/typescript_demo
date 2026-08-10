// access_modifiers.ts

class Employee {
    // Public: Accessible from anywhere
    public name: string;

    // Private: Accessible only inside this class
    private salary: number;

    // Protected: Accessible inside this class and child classes
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    // Public method
    public displayDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.department}`);
    }

    // Private method
    private displaySalary(): void {
        console.log(`Salary: ${this.salary}`);
    }

    // Public method to access private method
    public showSalary(): void {
        this.displaySalary();
    }
}

// Child Class
class Manager extends Employee {
    public showDepartment(): void {
        console.log(`Department: ${this.department}`);
    }
}

// Creating Objects
const emp = new Employee("Sowmya", 50000, "IT");

console.log(emp.name);    
emp.displayDetails();
emp.showSalary();        


const mgr = new Manager("Shiva", 70000, "HR");
mgr.showDepartment();

