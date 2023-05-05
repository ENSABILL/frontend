import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AgentComponent
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    FormsModule
  ]
})
export class AgentModule { }
