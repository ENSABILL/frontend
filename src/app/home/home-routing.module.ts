import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ClientGuard } from '../guards/client/client.guard';
import { AgentGuard } from '../guards/agent/agent.guard';
import { AdminGuard } from '../guards/admin/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { 
        path: 'client', 
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
        canActivate: [ ClientGuard ]
      }, 
      { 
        path: 'agent', 
        loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule) ,
        canActivate: [ AgentGuard ]
      }, 
      { 
        path: 'backOffice', 
        loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule),
        canActivate: [ AdminGuard ]
      },
      { 
        path: '**', 
        loadChildren: () => import('./client/client.module').then(m => m.ClientModule) ,
        canActivate: [ ClientGuard ]
      }, 
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
