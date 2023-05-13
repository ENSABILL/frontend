import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [
  { 
    path: '', component: WelcomeComponent,
    children: [
      { path: '', loadChildren: () => import('./landing-page/landing-page.module').then(m => m.LandingPageModule) },
      { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
      { path: 'aboutUs', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
      { path: 'contactUs', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) }, 
      { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
      { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
