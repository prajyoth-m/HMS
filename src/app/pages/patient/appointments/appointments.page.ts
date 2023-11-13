import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { Appointment } from "src/app/models/appointment";

@Component({
  selector: "app-appointments",
  templateUrl: "./appointments.page.html",
  styleUrls: ["./appointments.page.scss"],
})
export class AppointmentsPage implements OnInit {
  appointments: Appointment[];
  constructor(private alertController: AlertController) {}

  ngOnInit() {
    this.appointments = new Array();
    let appoint = new Appointment();
    appoint.date = "28/12/2023 12:30:00";
    appoint.name = "This appointment is to check if the patient has flu.";
    appoint.report =
      "Appointment with doctor Balaji is set to do a regular checkup on the patient, patient is showing symptoms of a regular flu.";
    appoint.doctor = "Balaji";
    this.appointments.push(appoint);
    let appoint2 = new Appointment();
    appoint2.date = "28/12/2023 12:30:00";
    appoint2.name = "This appointment is to check if the patient has flu.";
    appoint2.report =
      "Appointment with doctor Balaji is set to do a regular checkup on the patient, patient is showing symptoms of a regular flu.";
    appoint2.doctor = "Balaji";
    this.appointments.push(appoint2);
    console.log(this.appointments);
  }

  async editAppointment(appointment: Appointment) {
    const alert = await this.alertController.create({
      inputs: [{ name: "date", type: "date" }],
      buttons: [
        { text: "Cancel", role: "cancel", cssClass: "secondary" },
        {
          text: "ok",
          handler: (alertData) => {
            console.log(alertData.date);
          },
        },
      ],
    });
    alert.present();
  }
}
