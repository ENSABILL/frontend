import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentDefaultRoutingModule } from './agent-default-routing.module';
import { AgentDefaultComponent } from './agent-default.component';


@NgModule({
  declarations: [
    AgentDefaultComponent
  ],
  imports: [
    CommonModule,
    AgentDefaultRoutingModule
  ]
})
export class AgentDefaultModule { }
