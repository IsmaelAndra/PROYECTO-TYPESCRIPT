import { Activity } from "./activity";

export interface GradeBookSetup extends Activity {
    value:string;
    course:string;
    maximunGrade:number;
}