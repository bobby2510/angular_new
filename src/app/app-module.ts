import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Login } from './login/login';
import { Register } from './register/register';
import { NavBar } from './nav-bar/nav-bar';
import { About } from './about/about';
import { Contact } from './contact/contact';

@NgModule({
  declarations: [
    App,
    Login,
    Register,
    NavBar,
    About,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
