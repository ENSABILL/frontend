import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tests', loadChildren: () => import('./tests/tests.module').then(m => m.TestsModule) }, 
  { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) }, 
  { path: 'agent', loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule) }, 
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }, 
  { path: 'backOffice', loadChildren: () => import('./back-office/back-office.module').then(m => m.BackOfficeModule) }, 
  { path: 'login', loadChildren: () => import('./welcome/login/login.module').then(m => m.LoginModule) }, 
  { path: 'register', loadChildren: () => import('./welcome/register/register.module').then(m => m.RegisterModule) }, 
  { path: 'landingPage', loadChildren: () => import('./welcome/default/default.module').then(m => m.DefaultModule) },
  { path: '', loadChildren: () => import('./welcome/default/default.module').then(m => m.DefaultModule) },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
