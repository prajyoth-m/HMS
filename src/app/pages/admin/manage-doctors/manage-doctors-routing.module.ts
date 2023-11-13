import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageDoctorsPage } from './manage-doctors.page';

const routes: Routes = [
  {
    path: '',
    component: ManageDoctorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageDoctorsPageRoutingModule {}
