import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateDocPage } from './create-doc.page';

const routes: Routes = [
  {
    path: '',
    component: CreateDocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateDocPageRoutingModule {}
