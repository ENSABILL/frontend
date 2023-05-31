import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './components/utils/popup/popup.component';
import { NotificationComponent } from './components/utils/notification/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
  ],
  imports: [
    PopupComponent,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
