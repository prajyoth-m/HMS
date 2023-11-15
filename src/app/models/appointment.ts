import { Doctor } from "./doctor";
import { User } from "./user";

export class Appointment {
    name: string;
    date: string;
    report: string;
    doctor: Doctor;
    bill: number;
    status: string;
    patient: User;
}
