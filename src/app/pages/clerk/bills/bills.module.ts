import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillsPageRoutingModule } from './bills-routing.module';

import { BillsPage } from './bills.page';
import { CreateBillPage } from '../create-bill/create-bill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillsPageRoutingModule
  ],
  declarations: [BillsPage, CreateBillPage]
})
export class BillsPageModule {}
