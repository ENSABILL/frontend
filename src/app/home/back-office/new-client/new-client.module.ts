import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewClientRoutingModule } from './new-client-routing.module';
import { NewClientComponent } from './new-client.component';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from 'src/app/components/utils/popup/popup.component';


@NgModule({
  declarations: [
    NewClientComponent
  ],
  imports: [
    CommonModule,
    NewClientRoutingModule,
    FormsModule,
    PopupComponent
  ]
})
export class NewClientModule { }
