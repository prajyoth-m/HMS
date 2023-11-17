import { Component, Input, OnInit } from '@angular/core';
import { CreateDocPage } from '../create-doc/create-doc.page';
import { ModalController } from '@ionic/angular';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-manage-doctors',
  templateUrl: './manage-doctors.page.html',
  styleUrls: ['./manage-doctors.page.scss'],
})
export class ManageDoctorsPage implements OnInit {
  doctors: Doctor[] = new Array();
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    let doc = new Doctor();
    doc.doctorID = 1;
    doc.name = "Balaji";
    doc.specialization = "General";
    doc.userID = 102;
    this.doctors.push(doc);
    doc = new Doctor();
    doc.doctorID = 2;
    doc.name = "Naga";
    doc.specialization = "General";
    doc.userID = 104;
    this.doctors.push(doc);
  }

  refresh(){}

  async createDoc(){
    const modal = await this.modalController.create({
      component: CreateDocPage,
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
    this.refresh();
  }

  async editDoctor(doc: Doctor){
    const modal = await this.modalController.create({
      component: CreateDocPage,
      componentProps: {
        controller: this.modalController,
        data: doc,
        selectedUser: doc.userID,
        isEdit: true,
      },
    });
    modal.onDidDismiss().then((res) => {
      console.log(res);
      this.refresh();
    });
    return await modal.present();
    this.refresh();
  }
}
