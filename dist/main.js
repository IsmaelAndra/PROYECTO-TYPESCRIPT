"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let gradesBookSetup = [];
let activities = [];
var Activiti;
(function (Activiti) {
    Activiti["Tareas"] = "Tareas";
    Activiti["Examen"] = "Examen";
    Activiti["Trabajo"] = "Trabajo";
})(Activiti || (Activiti = {}));
var Course;
(function (Course) {
    Course["Programacion"] = "Programacion Visual";
    Course["BaseDatos"] = "Base de Datos";
    Course["Metodologias"] = "Metodologias";
})(Course || (Course = {}));
var Area;
(function (Area) {
    Area["Desarrollo"] = "Desarrollo de Software";
    Area["Marketing"] = "Marketing";
    Area["Turismo"] = "Turismo";
})(Area || (Area = {}));
function addStudent() {
    let currentStudent = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        mail: readFormHtml("mail"),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),
    };
    students.push(currentStudent);
    console.table(students);
}
function addTeacher() {
    let currentTeacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        mail: readFormHtml("mail-teacher"),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        area: readFormHtml("area-teacher")
    };
    teachers.push(currentTeacher);
    //console.log(teachers);
    console.table(teachers);
}
function addActivity() {
    let currentActivity = {
        activity: readFormHtml("activity")
    };
    activities.push(currentActivity);
    console.table(activities);
}
function addGradeBookSetup() {
    let currentGradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity"),
        maximunGrade: parseInt(readFormHtml("maximungrade-gradebook")),
    };
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
}
function initActivity() {
    let activity = document.getElementById("activity");
    let activity2 = document.getElementById("activity2");
    let activities = Object.values(Activiti);
    let activities2 = Object.values(Activiti);
    activities.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value,
            activity.add(option);
    }),
        activities2.forEach((value) => {
            let option2 = document.createElement("option");
            option2.value = value;
            option2.text = value,
                activity2.add(option2);
        });
}
;
initActivity();
function initCourse() {
    let courseGradeBook = document.getElementById("course-gradebook");
    let courses = Object.values(Course);
    courses.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value,
            courseGradeBook.add(option);
    });
}
initCourse();
function initArea() {
    let area = document.getElementById("area-teacher");
    let areas = Object.values(Area);
    areas.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value,
            area.add(option);
    });
}
initArea();
function readFormHtml(id) {
    return document.getElementById(id).value;
}
