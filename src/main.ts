import { GradeBookSetup } from "./entities/grade-book-setup";
import { Activity } from "./entities/activity";
import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";

let students: Student[] = [];
let teachers: Teacher[] = [];
let gradesBookSetup: GradeBookSetup[] = [];
let activities: Activity[] = [];

enum Activiti {
    Tareas = "Tareas",
    Examen = "Examen",
    Trabajo = "Trabajo",
}
enum Course{
    Programacion = "Programacion Visual",
    BaseDatos = "Base de Datos",
    Metodologias = "Metodologias",
}
enum Area{
    Desarrollo = "Desarrollo de Software",
    Marketing = "Marketing",
    Turismo = "Turismo",
}

function addStudent(): void {
    let currentStudent: Student = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        mail: readFormHtml("mail"),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),
    }
    students.push(currentStudent);
    console.table(students);
}

function addTeacher(): void {
    let currentTeacher: Teacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        mail: readFormHtml("mail-teacher"),
        direction: readFormHtml("direction-teacher"),
        title : readFormHtml("title-teacher"),
        area : readFormHtml("area-teacher")
    }
    teachers.push(currentTeacher);
    //console.log(teachers);
    console.table(teachers);
}

function addActivity():void {
    let currentActivity: Activity = {
        activity: readFormHtml("activity")
    }
    activities.push(currentActivity);
    console.table(activities);
}

function addGradeBookSetup(): void {
    let currentGradeBookSetup: GradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity"),
        maximunGrade: parseInt(readFormHtml("maximungrade-gradebook")),
    }
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
}

function initActivity():void{
    let activity = document.getElementById("activity") as HTMLSelectElement;
    let activity2 = document.getElementById("activity2") as HTMLSelectElement;
    let activities = Object.values(Activiti);
    let activities2 = Object.values(Activiti);
    activities.forEach((value) => {
     let option = document.createElement("option"); 
       option.value = value;
       option.text = value,
       activity.add(option);
    }
),
    activities2.forEach((value) => {
    let option2 = document.createElement("option"); 
      option2.value = value;
      option2.text = value,
      activity2.add(option2);
   });
};

initActivity();
function initCourse():void{
    let courseGradeBook = document.getElementById("course-gradebook") as HTMLSelectElement;
    let courses = Object.values(Course);
courses.forEach((value) => {
     let option = document.createElement("option"); 
       option.value = value;
       option.text = value,
       courseGradeBook.add(option);
    }
);
}
initCourse();
function initArea():void{
    let area = document.getElementById("area-teacher") as HTMLSelectElement;
    let areas = Object.values(Area);
areas.forEach((value) => {
     let option = document.createElement("option"); 
       option.value = value;
       option.text = value,
       area.add(option);
    }
);
}
initArea();


function readFormHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id))!.value;
}