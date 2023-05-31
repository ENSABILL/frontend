import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestsRoutingModule } from './tests-routing.module';
import { TestsComponent } from './tests.component';
import { PopupComponent } from '../components/utils/popup/popup.component';


@NgModule({
  declarations: [
    TestsComponent
  ],
  imports: [
    CommonModule,
    TestsRoutingModule,
    PopupComponent
  ]
})
export class TestsModule { }
