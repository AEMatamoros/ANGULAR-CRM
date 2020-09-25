import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { RegisterEnterpriseComponent } from './pages/auth/register-enterprise/register-enterprise.component';
import { MainComponent } from './pages/main/main.component';
import { SidebarModule } from 'ng-sidebar';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    RegisterEnterpriseComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
