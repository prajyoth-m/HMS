import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BillsPage } from './bills.page';
import { RouterModule } from '@angular/router';
import { BillStatusPipe } from 'src/app/filters/bill-status.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: BillsPage }])
  ],
  declarations: [BillsPage,BillStatusPipe]
})
export class BillsPageModule {}
