import {NgModule} from '@angular/core';

//module
import {CommonModule} from '@angular/common';

// component
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule {
}
