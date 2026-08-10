// static_readonly.ts

class Student {
    // Static properties
    public static collegeName: string = "ABC Engineering College";
    public static totalStudents: number = 0;

    // Readonly property
    public readonly rollNo: number;

    public name: string;

    constructor(name: string, rollNo: number) {
        this.name = name;
        this.rollNo = rollNo;

        // Increment static count
        Student.totalStudents++;
    }

    // Static method
    public static showCollege(): void {
        console.log(`College: ${Student.collegeName}`);
    }

    // Instance method
    public displayDetails(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Roll No: ${this.rollNo}`);
    }
}


Student.showCollege();


const student1 = new Student("Pavani", 101);
const student2 = new Student("Hanuma", 102);


student2.displayDetails();

console.log(`Student 1 Roll No: ${student1.rollNo}`);


console.log(`Total Students: ${Student.totalStudents}`);
