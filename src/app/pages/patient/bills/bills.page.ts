import { Component, OnInit } from "@angular/core";
import { Appointment } from "src/app/models/appointment";
import { Archive } from "src/app/models/archive";
import { Doctor } from "src/app/models/doctor";

@Component({
  selector: "app-bills",
  templateUrl: "./bills.page.html",
  styleUrls: ["./bills.page.scss"],
})
export class BillsPage implements OnInit {
  archives: Archive[];
  constructor() {}

  ngOnInit() {
    this.archives = new Array();
    let arch = new Archive();
    arch.archiveID = 1;
    arch.appointments = new Array();
    let app = new Appointment();
    app.date = "28/12/2023 12:30:00";
    app.name = "This appointment is to check if the patient has flu.";
    app.report =
      "Appointment with doctor Balaji is set to do a regular checkup on the patient, patient is showing symptoms of a regular flu.";
    app.doctor = new Doctor();
    app.doctor.doctorID = 101;
    app.doctor.name = "balaji";
    app.doctor.specialization = "general";
    app.bill = 100;
    app.status = "paid";
    arch.appointments.push(app);
    app = new Appointment();
    app.date = "28/12/2023 12:30:00";
    app.name = "This appointment is to check if the patient has flu.";
    app.report =
      "Appointment with doctor Balaji is set to do a regular checkup on the patient, patient is showing symptoms of a regular flu.";
    app.doctor = new Doctor();
    app.doctor.doctorID = 101;
    app.doctor.name = "balaji";
    app.doctor.specialization = "general";
    app.bill = 100;
    app.status = "pending";
    arch.appointments.push(app);
    this.archives.push(arch);
    arch = new Archive();
    arch.archiveID = 2;
    arch.appointments = new Array();
    app = new Appointment();
    app.date = "28/12/2023 12:30:00";
    app.name = "This appointment is to check if the patient has flu.";
    app.report =
      "Appointment with doctor Balaji is set to do a regular checkup on the patient, patient is showing symptoms of a regular flu.";
    app.doctor = new Doctor();
    app.doctor.doctorID = 101;
    app.doctor.name = "balaji";
    app.doctor.specialization = "general";
    app.bill = 100;
    app.status = "paid";
    arch.appointments.push(app);
    app = new Appointment();
    app.date = "28/12/2023 12:30:00";
    app.name = "This appointment is to check if the patient has flu.";
    app.report =
      "Appointment with doctor Balaji is set to do a regular checkup on the patient, patient is showing symptoms of a regular flu.";
    app.doctor = new Doctor();
    app.doctor.doctorID = 101;
    app.doctor.name = "balaji";
    app.doctor.specialization = "general";
    app.bill = 100;
    app.status = "pending";
    arch.appointments.push(app);
    this.archives.push(arch);
  }
}
