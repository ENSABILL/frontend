import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAgentRoutingModule } from './new-agent-routing.module';
import { NewAgentComponent } from './new-agent.component';


@NgModule({
  declarations: [
    NewAgentComponent
  ],
  imports: [
    CommonModule,
    NewAgentRoutingModule
  ]
})
export class NewAgentModule { }
