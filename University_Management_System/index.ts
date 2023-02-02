class Person {
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    getName(){
        return this.getName;
    }
}
class Student extends Person {
    rollNumber:string;
    courses:string[]=[];
    constructor(name:string,age:number,rollNumber:string){
        super(name,age)
        this.rollNumber=rollNumber;
    
    }
    registerCourse(course:string){
    this.courses.push(course);
    }
}
class Instructor extends Person {
    salary:number;
    courses:string[]=[];
    constructor(name:string,age:number,salary:number){
        super(name,age);
        this.age=age;
        this.name=name;
        this.salary=salary;
    }
    assignCourses(course:string){
        this.courses.push(course);


        
    }
}
class Course {
    id:string;
    name:string;
    students:Student[]=[];
    instructor!:Instructor[]; 
     constructor(id: string,name: string){
        this.id=id;
        this.name=name;

     }
     addStudent(student:Student){
        this.students.push()
     }
     setInstructor(instructor:Instructor[]){
        this.instructor=instructor;

     }
}






const course1=new Course("course1","Metaverse");
const course2=new Course("course2","Bioinformatics");

const student1=new Student("Ali",21,"123");
// student1.registerCourse("Typescript");
// console.log(student1.courses);
const student2=new Student("Hamza",20,"456");
console.log(student1);
console.log(student2);
const instructor1=new Instructor("Ali",30,500000);
instructor1.assignCourses("Metaverse");
instructor1.assignCourses("Block Chain");
instructor1.assignCourses("Cloud Native Computing");
console.log(instructor1.courses);


const instructor2=new Instructor("Umar",27,300000);