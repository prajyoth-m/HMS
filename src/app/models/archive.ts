import { Appointment } from "./appointment";
import { Doctor } from "./doctor";

export class Archive {
    archiveID: number;
    patientName: string;
    name: string;
    appointments: Appointment[];
    status: string;
}
