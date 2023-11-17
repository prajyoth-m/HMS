import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Appointment } from "src/app/models/appointment";
import { Doctor } from "src/app/models/doctor";
import { User } from "src/app/models/user";

@Component({
  selector: "app-create-appointment",
  templateUrl: "./create-appointment.page.html",
  styleUrls: ["./create-appointment.page.scss"],
})
export class CreateAppointmentPage implements OnInit {
  @Input() controller: ModalController;
  data: Appointment = new Appointment();
  isEdit: boolean = false;
  constructor() {}

  ngOnInit() {
    console.log(this.data);
    console.log(this.isEdit);
    if (!this.isEdit) {
      this.data.doctor = new Doctor();
      this.data.patient = new User();
    }
  }

  closeModal() {
    this.controller.dismiss();
  }

  submit() {
    this.controller.dismiss(this.data);
  }
}
