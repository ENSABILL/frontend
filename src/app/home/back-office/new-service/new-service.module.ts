import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewServiceRoutingModule } from './new-service-routing.module';
import { NewServiceComponent } from './new-service.component';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from 'src/app/components/utils/popup/popup.component';


@NgModule({
  declarations: [
    NewServiceComponent
  ],
  imports: [
    CommonModule,
    NewServiceRoutingModule,
    FormsModule,
    PopupComponent
  ]
})
export class NewServiceModule { }
