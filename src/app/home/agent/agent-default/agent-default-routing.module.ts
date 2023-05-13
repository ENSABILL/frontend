import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentDefaultComponent } from './agent-default.component';

const routes: Routes = [{ path: '', component: AgentDefaultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentDefaultRoutingModule { }
