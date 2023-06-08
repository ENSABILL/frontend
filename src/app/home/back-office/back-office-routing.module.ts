import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';

const routes: Routes = [
  { 
    path: '', component: BackOfficeComponent,
    children: [
      { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, 
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, 
      { path: 'newAgent', loadChildren: () => import('./new-agent/new-agent.module').then(m => m.NewAgentModule) }, 
      { path: 'newClient', loadChildren: () => import('./new-client/new-client.module').then(m => m.NewClientModule) },
      { path: 'clientsRequests', loadChildren: () => import('./requests/requests.module').then(m => m.RequestsModule) },
      { path: 'newAgency', loadChildren: () => import('./new-agency/new-agency.module').then(m => m.NewAgencyModule) },
      { path: 'newService', loadChildren: () => import('./new-service/new-service.module').then(m => m.NewServiceModule) },
      { path: '**', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }, 
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
