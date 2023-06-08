import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAgencyRoutingModule } from './new-agency-routing.module';
import { NewAgencyComponent } from './new-agency.component';
import { PopupComponent } from 'src/app/components/utils/popup/popup.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewAgencyComponent
  ],
  imports: [
    CommonModule,
    NewAgencyRoutingModule,
    PopupComponent,
    FormsModule
  ]
})
export class NewAgencyModule { }
