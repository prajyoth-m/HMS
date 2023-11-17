import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { Doctor } from 'src/app/models/doctor';
import { User } from 'src/app/models/user';
import { CreateBillPage } from '../create-bill/create-bill.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.page.html',
  styleUrls: ['./bills.page.scss'],
})
export class BillsPage implements OnInit {
  appointments: Appointment[] = new Array;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    let appoint = new Appointment();
    appoint.date = "28/12/2023 12:30:00";
    appoint.name = "Common Flu";
    appoint.report =
      "Appointment with doctor Balaji is set to do a regular checkup on the patient, patient is showing symptoms of a regular flu.";
    appoint.doctor = new Doctor();
    appoint.doctor.doctorID = 101;
    appoint.doctor.name = "balaji";
    appoint.doctor.specialization = "general";
    appoint.patient = new User();
    appoint.patient.name = "Sai";
    appoint.patient.email = "test@test.com";
    appoint.patient.userID = 1001;
    appoint.bill = 100;
    appoint.status = "in-progress";
    this.appointments.push(appoint);
    let appoint2 = new Appointment();
    appoint2.date = "28/12/2023 12:30:00";
    appoint2.name = "Common Flu";
    appoint2.report =
      "Appointment with doctor Balaji is set to do a regular checkup on the patient, patient is showing symptoms of a regular flu.";
    appoint2.doctor = new Doctor();
    appoint2.doctor.doctorID = 101;
    appoint2.doctor.name = "balaji";
    appoint2.doctor.specialization = "general";
    appoint2.patient = new User();
    appoint2.patient.name = "Naga";
    appoint2.patient.email = "test@test.com";
    appoint2.patient.userID = 1002;
    appoint2.bill = 101;
    appoint2.status = "complete";
    this.appointments.push(appoint2);
  }

  refresh(){}

  async createBill(app: Appointment){
    const modal = await this.modalController.create({
      component: CreateBillPage,
      componentProps: {
        controller: this.modalController,
        data: app,
      },
    });
    modal.onDidDismiss().then((res) => {
      console.log(res);
      this.refresh();
    });
    return await modal.present();
  }

}
