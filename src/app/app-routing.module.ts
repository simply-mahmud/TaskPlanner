import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RegTpComponent} from './reg-tp/reg-tp.component'
import {LoginTpComponent} from './login-tp/login-tp.component'
import {GetInfoTpComponent} from './get-info-tp/get-info-tp.component'

import { Routes,RouterModule } from '@angular/router';



const routes: Routes =[
  {
    component:RegTpComponent,
    path: 'register'
  },
  {
    component:LoginTpComponent,
    path:'login'
  },
  {
    component:GetInfoTpComponent,
    path:'profile'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }
