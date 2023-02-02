class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.getName;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerCourse(course) {
        this.courses.push(course);
    }
}
// class Instructor extends Person {
// salary:number;
// courses:string[]=[];
// assignCourses(course:string){
// }
// }
const student1 = new Student("Ali", 21, "123");
student1.registerCourse("Typescript");
console.log(student1.courses);
const student2 = new Student("Hamza", 20, "456");
console.log(student1);
console.log(student2);
export {};
