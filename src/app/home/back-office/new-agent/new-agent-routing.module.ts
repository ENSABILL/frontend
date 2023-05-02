import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAgentComponent } from './new-agent.component';

const routes: Routes = [{ path: '', component: NewAgentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewAgentRoutingModule { }
