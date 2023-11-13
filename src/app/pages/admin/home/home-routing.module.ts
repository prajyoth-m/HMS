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
        path: "doctors",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../manage-doctors/manage-doctors.module").then((m) => m.ManageDoctorsPageModule),
          },
        ],
      },
      {
        path: "users",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../manage-users/manage-users.module").then((m) => m.ManageUsersPageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/admin/home/appointments",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/patient/home/appointments",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
