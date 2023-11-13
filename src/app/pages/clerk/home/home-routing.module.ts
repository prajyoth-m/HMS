import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: "",
    component: HomePage,
    children: [
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
        redirectTo: "/clerk/home/bills",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/clerk/home/bills",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
