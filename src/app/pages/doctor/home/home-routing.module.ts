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
              import("../appointments/appointments.module").then((m) => m.AppointmentsPageModule),
          },
        ],
      },
      {
        path: "history",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../history/history.module").then((m) => m.HistoryPageModule),
          },
        ],
      },
      {
        path: "progress",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../progress/progress.module").then((m) => m.ProgressPageModule),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/doctor/home/appointments",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/doctor/home/appointments",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
