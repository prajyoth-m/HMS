import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAppointmentsPageRoutingModule } from './create-appointments-routing.module';

import { CreateAppointmentsPage } from './create-appointments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAppointmentsPageRoutingModule
  ],
  declarations: [CreateAppointmentsPage]
})
export class CreateAppointmentsPageModule {}
