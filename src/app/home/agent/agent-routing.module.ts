import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent.component';

const routes: Routes = [
  { 
    path: '', component: AgentComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./agent-default/agent-default.module').then(m => m.AgentDefaultModule) 
      },
      { 
        path: 'newClient', 
        loadChildren: () => import('./new-client/new-client.module').then(m => m.NewClientModule) 
      }

    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
