import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAgentRoutingModule } from './new-agent-routing.module';
import { NewAgentComponent } from './new-agent.component';
import { FormsModule } from '@angular/forms';
import { PopupComponent } from 'src/app/components/utils/popup/popup.component';


@NgModule({
  declarations: [
    NewAgentComponent,
  ],
  imports: [
    CommonModule,
    NewAgentRoutingModule,
    FormsModule,
    PopupComponent
  ]
})
export class NewAgentModule { }
