import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginTpComponent } from './login-tp/login-tp.component';
import { RegTpComponent } from './reg-tp/reg-tp.component';
import { GetInfoTpComponent } from './get-info-tp/get-info-tp.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginTpComponent,
    RegTpComponent,
    GetInfoTpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
