import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageAppointmentsPageRoutingModule } from './manage-appointments-routing.module';

import { ManageAppointmentsPage } from './manage-appointments.page';
import { CreateAppointmentPage } from '../create-appointment/create-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageAppointmentsPageRoutingModule
  ],
  declarations: [ManageAppointmentsPage, CreateAppointmentPage]
})
export class ManageAppointmentsPageModule {}
