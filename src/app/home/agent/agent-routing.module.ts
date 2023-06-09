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
      },
      { 
        path: 'agentHome', 
        loadChildren: () => import('./agent-default/agent-default.module').then(m => m.AgentDefaultModule) 
      },
      { 
        path: 'changePassword', 
        loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule) 
      }, 
      { 
        path: '**', 
        loadChildren: () => import('./agent-default/agent-default.module').then(m => m.AgentDefaultModule) 
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
