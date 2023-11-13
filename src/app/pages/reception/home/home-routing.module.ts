import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: "",
    component: HomePage,
    children: [
      {
        path: "appointments",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../manage-appointments/manage-appointments.module").then((m) => m.ManageAppointmentsPageModule),
          },
        ],
      },
      {
        path: "patients",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../manage-patients/manage-patients.module").then((m) => m.ManagePatientsPageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/reception/home/appointments",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/reception/home/appointments",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
