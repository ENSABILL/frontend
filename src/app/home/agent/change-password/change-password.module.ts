import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
import { PopupComponent } from 'src/app/components/utils/popup/popup.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    ChangePasswordRoutingModule,
    PopupComponent,
    FormsModule
  ]
})
export class ChangePasswordModule { }
