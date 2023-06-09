import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentDefaultRoutingModule } from './agent-default-routing.module';
import { AgentDefaultComponent } from './agent-default.component';
import { DashboardModule } from '../../back-office/dashboard/dashboard.module';


@NgModule({
  declarations: [
    AgentDefaultComponent
  ],
  imports: [
    CommonModule,
    AgentDefaultRoutingModule,
    DashboardModule
  ]
})
export class AgentDefaultModule { }
