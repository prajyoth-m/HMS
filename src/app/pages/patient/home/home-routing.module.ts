import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePage } from "./home.page";

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
              import("../appointments/appointments.module").then((m) => m.AppointmentsPageModule),
          },
        ],
      },
      {
        path: "bills",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../bills/bills.module").then((m) => m.BillsPageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/patient/home/appointments",
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
