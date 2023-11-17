import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDocPageRoutingModule } from './create-doc-routing.module';

import { CreateDocPage } from './create-doc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDocPageRoutingModule
  ],
  declarations: [CreateDocPage]
})
export class CreateDocPageModule {}
