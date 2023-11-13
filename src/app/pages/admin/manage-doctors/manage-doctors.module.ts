import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageDoctorsPageRoutingModule } from './manage-doctors-routing.module';

import { ManageDoctorsPage } from './manage-doctors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageDoctorsPageRoutingModule
  ],
  declarations: [ManageDoctorsPage]
})
export class ManageDoctorsPageModule {}
