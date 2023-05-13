import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewClientRoutingModule } from './new-client-routing.module';
import { NewClientComponent } from './new-client.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewClientComponent
  ],
  imports: [
    CommonModule,
    NewClientRoutingModule,
    FormsModule
  ],
  exports:[
    NewClientComponent
  ]
})
export class NewClientModule { }
