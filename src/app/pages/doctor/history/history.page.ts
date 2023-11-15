import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';
import { Appointment } from 'src/app/models/appointment';
import { Archive } from 'src/app/models/archive';
import { Doctor } from 'src/app/models/doctor';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  archives: Archive[];
  userName: string = "";
  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.archives = new Array();
    let arc = new Archive();
    arc.archiveID = 1001;
    arc.patientName = "Sai";
    arc.name = "Common Flu";
    arc.status = "Completed";
    arc.appointments = new Array();
    let app = new Appointment();
    app.date = "28/12/2023 12:30:00";
    app.name = "This appointment is to check if the patient has flu.";
    app.report =
      "Appointment with doctor Balaji is set to do a regular checkup on the patient, patient is showing symptoms of a regular flu.";
    app.doctor = new Doctor();
    app.doctor.doctorID = 101;
    app.doctor.name = "balaji";
    app.doctor.specialization = "general";
    app.patient = new User();
    app.patient.name = "Sai";
    app.patient.email = "test@test.com";
    app.patient.userID = 1001;
    arc.appointments.push(app);
    arc.appointments.push(app);
    arc.appointments.push(app);
    this.archives.push(arc);
    arc = new Archive();
    arc.archiveID = 1001;
    arc.patientName = "Satya";
    arc.name = "Common Flu";
    arc.status = "In-Progress";
    arc.appointments = new Array();
    app = new Appointment();
    app.date = "28/12/2023 12:30:00";
    app.name = "This appointment is to check if the patient has flu.";
    app.report =
      "Appointment with doctor Balaji is set to do a regular checkup on the patient, patient is showing symptoms of a regular flu.";
    app.doctor = new Doctor();
    app.doctor.doctorID = 101;
    app.doctor.name = "balaji";
    app.doctor.specialization = "general";
    app.patient = new User();
    app.patient.name = "Satya";
    app.patient.email = "test@test.com";
    app.patient.userID = 1001;
    arc.appointments.push(app);
    arc.appointments.push(app);
    arc.appointments.push(app);
    this.archives.push(arc);
    arc = new Archive();
    arc.archiveID = 1001;
    arc.patientName = "Prajyoth";
    arc.status = "Completed";
    arc.name = "Common Flu";
    arc.appointments = new Array();
    app = new Appointment();
    app.date = "28/12/2023 12:30:00";
    app.name = "This appointment is to check if the patient has flu.";
    app.report =
      "Appointment with doctor Balaji is set to do a regular checkup on the patient, patient is showing symptoms of a regular flu.";
    app.doctor = new Doctor();
    app.doctor.doctorID = 101;
    app.doctor.name = "balaji";
    app.doctor.specialization = "general";
    app.patient = new User();
    app.patient.name = "Satya";
    app.patient.email = "test@test.com";
    app.patient.userID = 1001;
    arc.appointments.push(app);
    arc.appointments.push(app);
    arc.appointments.push(app);
    this.archives.push(arc);
  }

  async openAppDesc(appointment: Appointment){
    const alert = await this.alertController.create({
      
      header:"Report",
      message:appointment.report,
      buttons: ['OK']
    });
    alert.present();
  }

}
