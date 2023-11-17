import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Appointment } from 'src/app/models/appointment';
import { Doctor } from 'src/app/models/doctor';
import { User } from 'src/app/models/user';
import { CreateAppointmentPage } from '../../admin/create-appointment/create-appointment.page';

@Component({
  selector: 'app-manage-appointments',
  templateUrl: './manage-appointments.page.html',
  styleUrls: ['./manage-appointments.page.scss'],
})
export class ManageAppointmentsPage implements OnInit {
  appointments: Appointment[] = new Array();
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    let app = new Appointment();
    app.date = "12-12-2023 12:00";
    app.doctor = new Doctor();
    app.doctor.doctorID = 1;
    app.doctor.name = "Balaji";
    app.doctor.specialization = "General";
    app.name = "Common Flu";
    app.patient = new User();
    app.patient.email = "test@test.com";
    app.patient.name = "Sai";
    app.patient.role = "patient";
    app.patient.userID = 101;
    app.report = "";
    app.status = "In-Progress";
    this.appointments.push(app);
    app = new Appointment();
    app.date = "13-12-2023 12:00";
    app.doctor = new Doctor();
    app.doctor.doctorID = 1;
    app.doctor.name = "Balaji";
    app.doctor.specialization = "General";
    app.name = "Common Flu";
    app.patient = new User();
    app.patient.email = "test@test.com";
    app.patient.name = "Prajyoth";
    app.patient.role = "patient";
    app.patient.userID = 101;
    app.report = "";
    app.status = "In-Progress";
    this.appointments.push(app);
  }
  refresh(){}
  async createApp() {
    const modal = await this.modalController.create({
      component: CreateAppointmentPage,
      componentProps: {
        controller: this.modalController,
        isEdit: false,
      },
    });
    modal.onDidDismiss().then((res) => {
      console.log(res);
      this.refresh();
    });
    return await modal.present();
  }

  deleteApp(appointment: Appointment) {
    console.log("In Delete");
  }

  async editApp(appointment: Appointment) {
    console.log("In Edit");
    const modal = await this.modalController.create({
      component: CreateAppointmentPage,
      componentProps: {
        controller: this.modalController,
        data: appointment,
        isEdit: true,
      },
    });
    modal.onDidDismiss().then((res) => {
      console.log(res);
      this.refresh();
    });
    return await modal.present();
  }
}
