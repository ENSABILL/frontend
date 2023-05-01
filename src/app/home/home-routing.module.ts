import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }, 
      { path: 'agent', loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule) }, 
      { path: 'backOffice', loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule) }
    ]
  }, 
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
