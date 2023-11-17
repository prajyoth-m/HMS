import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.page.html',
  styleUrls: ['./create-bill.page.scss'],
})
export class CreateBillPage implements OnInit {
  @Input() controller: ModalController;
  data: Appointment;
  constructor() { }

  ngOnInit() {
  }

  closeModal(){
    this.controller.dismiss();
  }
  submit(){
    this.controller.dismiss(this.data);
  }

}
